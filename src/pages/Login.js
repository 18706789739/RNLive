import React, {Component} from 'react';
import {
    View,Text,Image,
    StyleSheet,
    ScrollView,
    Platform, 
    NativeModules,
    TouchableOpacity,
    WebView,
    Alert,
} from 'react-native';
import {connect} from 'react-redux';
import TextInputItem from '../component/TextInputItem';
import {setLoginStatu} from '../redux/loginReducer'
import {URL} from '../global/global';

var MD5 = require("crypto-js/md5");

const Dimensions = require('Dimensions');
const {height,width} =  Dimensions.get('window');
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const screenHiehgt = height - STATUSBAR_HEIGHT ;

export class Login extends Component {
    constructor(props){
        super(props);

        this.state = { 
            account: '' ,
            password:'',
            scene:"login",
            mobile:'',
            registerpw:'',
            registerrepw:'',
            nickname:'',
            code:'',
            codeButtonText:"发送验证码",
            fingerCode:"",
            webView:{},
            ck:"",
            codeUrl:"",
            errorCount:0,
        };
    }

    static navigationOptions = {
        header:null
    }
    async componentWillMount(){

        //判断登录状态
        let token= await global.storage.load({
            key:'token'
        }).then((res)=>{
            if(res.length != 0){
                this.props.navigation.navigate('Mine', { name: 'Brent' })
            }
        })
        .catch((res)=>{})

        let cookie = await this.getCookie(URL.register);
        this.setState({ck:cookie.data.ck});

    }
    sendLogin(){
        let {
            account,
            password,
            fingerCode,
            code
        } = this.state;
        let param = `username=${account}&password=${ MD5(MD5(password)+code) }&validateCode=${code}&onlyFlag=${fingerCode}&_=${new Date().getTime()}`
        console.log(param);
        fetch(`${URL.login}?ck=${this.state.ck}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:param,
        }).then((response) => {
            return response.json();
        }).then((json)=>{
            if(json.data.status == true){
                global.storage.save({
                    key:'token',
                    data: json.data.ck,
                });
                this.props.navigation.navigate('Mine', { name: 'Brent' })
            }else{
                Alert.alert(json.data.info)
                if(json.data.errorCount >= 3){
                    this.setCodeUrl();
                    this.setState({
                        errorCount:json.data.errorCount
                    })
                }
            }
            
        })
    }

    sendRegister(){

        let {
            code,
            mobile,
            ck,
            registerpw,
            registerrepw,
            nickname,
        } = this.state;

        let param = `account=${mobile}&password=${registerpw}&repassword=${registerrepw}&realname=${nickname}&verifycode=${code}`
        fetch(`${URL.register}?ck=${ck}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:param,
        }).then((response) => {
            return response.json();
        }).then((json)=>{
            Alert.alert(json.data.info);
        })

    }

    async setCodeUrl(){
        cookie = this.state.ck;
        let codeUrl = await this.getCode64(cookie);
        console.log(`data:image/png;base64,${codeUrl.data.img}`);
        this.setState({
            codeUrl:`data:image/png;base64,${codeUrl.data.img}`,
            ck:cookie
        });
    }
    getCookie(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then((response)=>{  return response.json();  })
            .then((json)=>{resolve(json)})
        })
    }
    getCode64(ck){
        return new Promise((resolve,reject)=>{
            fetch(`${URL.validateCode}?ck=${ck}`)
            .then((response)=>{  return response.json();  })
            .then((json)=>{resolve(json)})
        })
    }
    sendCode = ()=>{
        let s = 60;
        let timer = setInterval(()=>{
            this.setState({codeButtonText: --s})
            if(s == 0 ) {
                clearInterval(timer);
                this.setState({codeButtonText:'发送验证码'})
            }
        },1000)
    }
    onAccountChange = (account)=>{
        this.setState({ account })
    }
    onPasswordChange = (password)=>{
        this.setState({ password })
    }
    toggleScene = (scene)=>{
        this.setState({ scene })
        if(scene="register"){
            this.setCodeUrl();
            console.log(this)
        }
    }
    onMobileChange = (mobile)=>{
        this.setState({ mobile })
    }
    onRegisterPwChange = (registerpw)=>{
        this.setState({ registerpw })
    }
    onRegisterRePwChange = (registerrepw)=>{
        this.setState({ registerrepw })
    }
    onNicknameChange = (nickname)=>{
        this.setState({ nickname })
    }
    onCodeChange = (code)=>{
        this.setState({ code })
    }
    onFIngerMessage=(event)=>{
        console.log('finger:'+event.nativeEvent.data)
        this.setState({fingerCode:event.nativeEvent.data});
    }
    sendMessage=()=>{
        this.webView.postMessage( "Post message from react native " );
    }
    
    render(){
        let {
            scene,
            codeUrl,
            errorCount
        } = this.state;
        return (
            <ScrollView >
            <WebView 
                onLoad={this.sendMessage}
                ref={( webView ) => this.webView = webView} 
                style={{height:0}} 
                onMessage={this.onFIngerMessage} 
                source={{uri:'https://djdj6789.com/finger.html'}}
            />

            <View style={{flex: 1,height:screenHiehgt,backgroundColor:"#FFF"}}>

                <View style={styles.logoContainer} >
                    <Image resizeMode="contain" style={styles.logo} source={require('../img/Logo.png')} />
                </View>

                <View style={styles.formContainer} >

                    <View style={styles.formButtonContainer}>
                        <TouchableOpacity activeOpacity={0.8} style={[styles.formButton]} onPress={()=>{this.toggleScene('login')}}>
                            <Image style={{flex:1}} resizeMode="stretch"   
                            source={ 
                                scene == 'login' 
                                ?require('../img/denglvhover.png')
                                :require('../img/denglu.png')
                            } 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}  style={[styles.formButton]} onPress={()=>{this.toggleScene('register')}}>
                            <Image style={{flex:1}} resizeMode="stretch" 
                                source={ 
                                    scene == 'register' 
                                    ?require('../img/zhucehover.png')
                                    :require('../img/zhuce.png')
                                } 
                            />
                        </TouchableOpacity>
                    </View>

                    { scene == 'login' 
                    ?<View>
                        <TextInputItem 
                            title='账号'
                            imgSource={require('../img/zhanghao.png')}
                            value={this.state.account} 
                            onChange={this.onAccountChange}
                            placeholder="请输入账户名"
                        />
                        <TextInputItem 
                            title='密码'
                            secureText={true}
                            imgSource={require('../img/mima.png')}
                            value={this.state.password} 
                            onChange={this.onPasswordChange}
                            placeholder="请输入密码"
                            boxStyles={{borderBottomLeftRadius:8,borderBottomRightRadius:8}}
                        />
                        { errorCount >= 3 ? <TextInputItem
                            imgSource={require('../img/yanzhengma.png')}
                            value={this.state.code} 
                            onChange={this.onCodeChange}
                            placeholder="请输入验证码"
                            codeUrl={this.state.codeUrl}
                            codeChange={()=>{this.setCodeUrl()}}
                            boxStyles={{borderRadius:4,marginTop:22,borderTopWidth:1}}
                        /> : null}
                        <View style={{flexDirection:"row",marginTop:44}}>
                            <TouchableOpacity style={{flex:1,flexDirection:"row"}} onPress={()=>{this.sendLogin()}}>
                                <Image style={{height:44,flex:1}} resizeMode="stretch"  source={require('../img/denglvanniu.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{color:'#e83727',flex:1,textAlign:'right',lineHeight:44}}>忘记密码？</Text>
                        </View>
                    </View>

                :   <View>
                        <TextInputItem 
                            imgSource={require('../img/zhanghao.png')}
                            value={this.state.mobile} 
                            onChange={this.onMobileChange}
                            placeholder="请输入账号"
                        />
                        <TextInputItem 
                            imgSource={require('../img/zhanghao.png')}
                            value={this.state.nickname} 
                            onChange={this.onNicknameChange}
                            placeholder="请输入昵称"
                        />
                        <TextInputItem 
                            secureText={true}
                            imgSource={require('../img/mima.png')}
                            value={this.state.registerpw} 
                            onChange={this.onRegisterPwChange}
                            placeholder="请设置您的密码(数字字母组合,共6-15位)"
                        />
                        <TextInputItem 
                            secureText={true}
                            imgSource={require('../img/mima.png')}
                            value={this.state.registerrepw} 
                            onChange={this.onRegisterRePwChange}
                            placeholder="请再次输入您的密码"
                            boxStyles={{borderBottomLeftRadius:4,borderBottomRightRadius:4}}
                        />
                        <TextInputItem
                            imgSource={require('../img/yanzhengma.png')}
                            value={this.state.code} 
                            onChange={this.onCodeChange}
                            placeholder="请输入验证码"
                            codeUrl={this.state.codeUrl}
                            codeChange={()=>{this.setCodeUrl()}}
                            boxStyles={{borderRadius:4,marginTop:22,borderTopWidth:1}}
                        />
                        <View style={{flexDirection:"row",marginTop:44}}>
                            <TouchableOpacity style={{flex:1,flexDirection:"row"}} onPress={()=>{this.sendRegister()}}>
                                <Image style={{height:44,flex:1}} resizeMode="stretch"  source={require('../img/zhucebutton.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                }

                </View>

                <View style={{flex: 0}} />

            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    logoContainer:{
        flex: 1.6, 
        flexDirection:'row',
        alignItems:"center"
    },
    logo: {
        width:260,
        flex:1
    },
    formContainer:{
        flex: 4, 
        paddingLeft:10,
        paddingRight:10,
    },
    formButtonContainer:{
        justifyContent:'center',
        flexDirection:'row',
    },
    formButton:{
        flexDirection:'row',
        flex:1,
    },
    radiusRight:{
        borderTopRightRadius:4,
    },
    radiusLeft:{
        borderTopLeftRadius:4,
    }
});

export default connect(
    state=>{
        return state.Login
    },
    (dispatch)=> {
        return{
            setLoginStatu: (data) => dispatch(setLoginStatu(data))
        }
    }
)(Login)

import React, {Component} from 'react';
import {
    View,Text,Image,
    StyleSheet,
    ScrollView,
    Platform, 
    NativeModules,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import TextInputItem from '../component/TextInputItem';
import {bindActionCreators} from 'redux'

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
        };
    }

    static navigationOptions = {
        header:null
    }
    componentDidMount(){

    }

    onAccountChange = (account)=>{
        this.setState({ account })
    }
    onPasswordChange = (password)=>{
        this.setState({ password })
    }
    toggleScene = (scene)=>{
        this.setState({ scene })
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
    
    render(){
        let scene = this.state.scene;
        return (
            <ScrollView >
            <View style={{flex: 1,height:screenHiehgt,backgroundColor:"#FFF"}}>

                <View style={styles.logoContainer} >
                    <Image resizeMode="contain" style={styles.logo} source={require('../img/Logo.png')} />
                </View>

                <View style={styles.formContainer} >

                    <View style={styles.formButtonContainer}>
                        <TouchableOpacity style={[styles.formButton]} onPress={()=>{this.toggleScene('login')}}>
                            <Image style={{flex:1}} resizeMode="stretch"   
                            source={ 
                                scene == 'login' 
                                ?require('../img/denglvhover.png')
                                :require('../img/denglu.png')
                            } 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.formButton]} onPress={()=>{this.toggleScene('register')}}>
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
                            keyboardType="numeric"
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
                        <View style={{flexDirection:"row",marginTop:44}}>
                            <Image style={{flex:1,height:44}} resizeMode="stretch"  source={require('../img/denglvanniu.png')} />
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
                            keyboardType="numeric"
                            placeholder="请输入你的手机号码"
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
                            boxStyles={{borderBottomLeftRadius:8,borderBottomRightRadius:8}}
                        />
                        <View style={{flexDirection:"row",marginTop:44}}>
                            <Image style={{flex:1,height:44}} resizeMode="stretch"  source={require('../img/zhucebutton.png')} />
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
        flex: 1.5, 
        flexDirection:'row',
        alignItems:"center"
    },
    logo: {
        width:260,
        flex:1
    },
    formContainer:{
        flex: 2.5, 
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
        borderTopRightRadius:10,
    },
    radiusLeft:{
        borderTopLeftRadius:10,
    }
});

export default connect(
    state=>{
        return state.musicPlayer
    },
    dispatch => {
        return {
            refreshHomePage: (param) => refreshHomePage(dispatch, param)
        }
    }
)(Login)

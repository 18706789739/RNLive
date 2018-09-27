import React, {Component} from 'react';
import {
    View,Text,Image,
    TouchableOpacity
} from 'react-native';
import TextInputItem from '../component/TextInputItem';

export default class ModifyPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            mobile:'',
            code:"",
            password:"",
            repassword:"",
            codeButtonText:"发送验证码",
            sendCodeDisable:false
        }
        console.log(this)
        this.props.navigation.setParams({
            navigationOptions:{
                title:"88"
            }
        })
    }
    onMobileChange = (mobile)=>{
        this.setState({mobile})
    }
    onMobileChange = (code)=>{
        this.setState({code})
    }
    onPasswordChange = (password)=>{
        this.setState({password})
    }
    onRePasswordChange = (repassword)=>{
        this.setState({repassword})
    }
    sendCode = ()=>{
        if(this.state.sendCodeDisable)return ;
        let s = 60;
        let timer = setInterval(()=>{
            this.setState({codeButtonText: --s})
            if(s == 0 ) {
                clearInterval(timer);
                this.setState({
                    codeButtonText:'发送验证码',
                    sendCodeDisable:false
                })
            }
        },1000)
        this.setState({sendCodeDisable:true})
    }
    
    static navigationOptions =  ({ navigation }) =>({
        title: navigation.state.params.title,
    });

    render(){
        return (
            <View style={{paddingTop:30,paddingLeft:10,paddingRight:10}}>
                <TextInputItem 
                    imgSource={require('../img/shouji.png')}
                    value={this.state.mobile} 
                    onChange={this.onMobileChange}
                    keyboardType="numeric"
                    placeholder="请输入你的手机号码"
                    boxStyles={{borderTopLeftRadius:4,borderTopRightRadius:4,borderWidth:1,borderTopWidth:1}}
                />
                <TextInputItem
                    imgSource={require('../img/yanzhengma.png')}
                    value={this.state.code} 
                    onChange={this.onCodeChange}
                    placeholder="请输入验证码"
                    rightButton={this.state.codeButtonText}
                    rightButtonHandle={this.sendCode}
                    boxStyles={{borderBottomLeftRadius:4,borderBottomRightRadius:4,borderWidth:1}}
                />
                <TextInputItem 
                    secureText={true}
                    imgSource={require('../img/mima.png')}
                    value={this.state.password} 
                    onChange={this.onPasswordChange}
                    keyboardType="numeric"
                    placeholder="请输入您的新密码（数字字母组合，共6-15位）"
                    boxStyles={{borderTopLeftRadius:4,borderTopRightRadius:4,borderWidth:1,borderTopWidth:1,marginTop:20}}
                />
                <TextInputItem
                    secureText={true}
                    imgSource={require('../img/mima.png')}
                    value={this.state.repassword} 
                    onChange={this.onRePasswordChange}
                    placeholder="请再次输入您的新密码"
                    boxStyles={{borderBottomLeftRadius:4,borderBottomRightRadius:4,borderWidth:1}}
                />
                <View style={{flexDirection:"row",marginTop:44}}>
                    <TouchableOpacity style={{flex:1,flexDirection:"row"}} onPress={()=>{}}>
                        <Image style={{height:44,flex:1}} resizeMode="stretch"  source={require('../img/wancheng.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
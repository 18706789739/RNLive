import React,{Component} from 'react';
import {View,Image,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
 
export default class TextInputItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            codeTime:new Date().getTime()
        }
    }

    codeChange = ()=>{
        this.setState({
            codeTime:new Date().getTime()
        })
    }
 
    render() {
        let {
            title ,
            imgSource,
            secureText,
            onChange,
            value,
            placeholder,
            boxStyles,
            keyboardType,
            rightButton,
            rightButtonHandle,
            codeUrl,
            codeChange
        } = this.props;

        let  {
            codeTime
        } = this.state;

        return(
            <View style={[styles.inputBox,boxStyles?boxStyles:{}]}>

                {imgSource ? 
                <View style={styles.icon}>
                    <Image resizeMode="contain" style={{height:14}} source={imgSource} />
                </View> : null}

                {title?<View style={styles.inputTitle}><Text style={{color: "#999999"}}>{title}</Text></View>:null}

                <TextInput
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={secureText?secureText:false}
                    placeholder={placeholder}
                    keyboardType ={keyboardType ?keyboardType :'default'}
                />
                {rightButton?
                <View style={styles.rightButton}>
                    <TouchableOpacity onPress={rightButtonHandle}>
                    <Text style={{color:"#FFF",textAlign:"center"}}>{rightButton}</Text>
                    </TouchableOpacity> 
                </View> : null}
                
                {codeUrl 
                ?<View style={{justifyContent:'center'}}>
                    <TouchableOpacity onPress={codeChange ? codeChange : this.codeChange}>
                        <Image style={{width:104,height:40}} source={{uri:`${codeUrl}${codeChange?'':codeTime}`}}/>
                    </TouchableOpacity>
                </View> : null}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon:{
        justifyContent:"center",
        width:25,
    },
    input:{
        height:44,
        flex:1,
        flexGrow:1,
    },
    rightButton:{
        backgroundColor:'#e93526',
        width:100,
        justifyContent:"center",
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4,
    },
    inputBox:{
        flexDirection:'row',
        borderWidth: 1,
        borderColor:'#e93526',
        paddingLeft:15,
        paddingRight:0,
        borderTopWidth:0,
        overflow:'hidden'
    },
    inputTitle:{
        width:40,
        justifyContent:"center",
    }
})
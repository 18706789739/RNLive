import React,{Component} from 'react';
import {View,Image,Text,TextInput,StyleSheet} from 'react-native';
 
export default class TextInputItem extends Component {
 
    render() {
        let {
            title ,
            imgSource,
            secureText,
            onChange,
            value,
            placeholder,
            boxStyles,
            keyboardType
        } = this.props;

        return(
            <View style={[styles.inputBox,boxStyles?boxStyles:{}]}>

                {imgSource ? 
                <View style={styles.icon}>
                    <Image resizeMode="cover" style={{width:14,height:14}} source={imgSource} />
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
    inputBox:{
        flexDirection:'row',
        borderWidth: 1,
        borderColor:'#e93526',
        paddingLeft:15,
        paddingRight:15,
        borderTopWidth:0
    },
    inputTitle:{
        width:40,
        justifyContent:"center",
    }
})
import React, {Component} from 'react';
import {
    View,Image,Text
} from 'react-native';

export default class ShareCode extends Component {

    static navigationOptions =  ({ navigation }) =>({
        title: '分享二维码',
    });

    render(){
        return (
            <View style={{flex:1}}>
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                    <Image resizeMode="contain" source={require('../img/Logo.png')} />
                </View>
                <View style={{flex:1,color:'rgb(102,102,102)',fontSize:12,paddingLeft:20,paddingRight:20}}>
                <Text>分享二维码增加免费观看时间</Text>
                </View>
                <View style={{flex:3,alignItems:'center'}}><Text>二维码</Text></View>
            </View>
        )
    }
    
}
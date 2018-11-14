import React, {Component} from 'react';
import {
    View,Image,Text
} from 'react-native';

export default class AboutUs extends Component {

    static navigationOptions =  ({ navigation }) =>({
        title: '关于我们',
    });

    render(){
        return (
            <View style={{flex:1}}>
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                    <Image resizeMode="contain" source={require('../img/Logo.png')} />
                </View>
                <View style={{flex:1,color:'rgb(102,102,102)',fontSize:12,paddingLeft:20,paddingRight:20}}>
                <Text>济州岛LIVE是一种新兴的网络社交方式，网络直播平台也成为了一种崭新的社交媒体。主要分为实时直播游戏、电影或电视剧，介绍产品知识及销售产品等</Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}><Text>当前版本：1.0</Text></View>
            </View>
        )
    }
    
}
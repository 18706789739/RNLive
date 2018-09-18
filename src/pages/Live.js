import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class Live extends Component {
    static navigationOptions = {
        title: '美女直播', // 设置头部标题
      };
    render(){
        return (
            <View><Text>live</Text></View>
        )
    }
}
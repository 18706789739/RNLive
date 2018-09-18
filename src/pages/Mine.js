import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class Mine extends Component {
    componentWillMount(){
        this.props.navigation.navigate('Login', { name: 'Brent' })
    }
    static navigationOptions = {
        title: '个人中心', // 设置头部标题
      };
    render(){
        return (
            <View><Text>mine</Text></View>
        )
    }
}
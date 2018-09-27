import React, {Component} from 'react';
import {View,Text,Alert,StyleSheet,WebView} from 'react-native';
import CookieManager from 'react-native-cookies';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

export class Game extends Component {
    componentWillMount(){
        CookieManager.get('http://999775_vip.mayks.cn/Register')
        .then((res) => {
            console.log('CookieManager.get =>', res); // => 'user_session=abcdefg; path=/;'
        });
    }
    loadStart = ()=>{
        //Alert.alert('加载中```')
    }
    videoError = ()=>{
        //Alert.alert('找不到主播');
    }
    static navigationOptions = {
        title: '游戏大厅',
    };
    render(){
        return (
            <View style={{flex:1}}>
            <WebView source={{uri:'http://999775_vip.mayks.cn/Register'}}>

            </WebView>
            </View>    
       
        )
    }
}
const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor:'#ffffff',
    },
  });
  
  //state中包括了所有绑定组件的state，return的是当前组件需要放在props中的数据
mapStateToProps = (state) => {
    return state.musicPlayer
}
 
//return 的是组件中需要放在props中的方法
mapDispatchToProps = (dispatch) => {
    return {
        refreshHomePage: (param) => refreshHomePage(dispatch, param)
    }
}
 
//绑定组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

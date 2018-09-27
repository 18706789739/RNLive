import React, {Component} from 'react';
import {View,Text,Alert,StyleSheet,WebView} from 'react-native';
import KSYVideo from 'react-native-ksyvideo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

export class LivePlayer extends Component {
    componentWillMount(){
        //this.props.navigation.navigate('Login', { name: 'Brent' })
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
            <KSYVideo source={{uri: ""}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
  
       volume={1.0}                            
       muted={false}                           
       paused={false}                          // Pauses playback entirely.
       resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
       repeat={true}                           // Repeat forever.
       playInBackground={false}                // Audio continues to play when app entering background.
       progressUpdateInterval={250.0}          // Interval to fire onProgress (default to ~250ms)
       onLoadStart={this.loadStart}            // Callback when video starts to load
       onError={this.videoError}               // Callback when video cannot be loaded
    //    onLoad={this.setDuration}               // Callback when video loads
    //    onProgress={this.setTime}               // Callback every ~250ms with currentTime
    //    onEnd={this.onEnd}                      // Callback when playback finishes
    //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
       style={styles.backgroundVideo} />
       
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
)(LivePlayer)

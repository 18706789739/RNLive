/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Alert} from 'react-native';
import KSYVideo from 'react-native-ksyvideo';

import { Provider } from 'react-redux';
import configStore from './src/redux/store';

export default class App extends Component {

  loadStart(){
    Alert.alert('标题内容','正在66中```');
  }

  render() {

    return (
      <Provider store={configStore}>
      <View style={styles.container}>
      
      <Text>626236</Text>
        
      <Text>8888</Text>
      <KSYVideo source={{uri: "http://wsflv.upliveapp.com/ws/1_8-338257824503037952075516aaf_8-4285380654117421056fbb89867_1.flv"}}   // Can be a URL or a local file.
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
      //  onLoad={this.setDuration}               // Callback when video loads
      //  onProgress={this.setTime}               // Callback every ~250ms with currentTime
      //  onEnd={this.onEnd}                      // Callback when playback finishes
      //  onError={this.videoError}               // Callback when video cannot be loaded
      //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
       style={styles.backgroundVideo} />
      
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor:'#ffffff',
  },
});

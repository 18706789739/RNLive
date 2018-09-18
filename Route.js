import React, {Component} from 'react';
import {Image} from 'react-native';
import TabBarItem from './src/component/TabBarItem';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Game from './src/pages/Game';
import Live from './src/pages/Live';
import Mine from './src/pages/Mine';
import Login from './src/pages/Login';
import ClientServer from './src/pages/ClinetServer';

const BottomTabNavigator = createBottomTabNavigator({
    Mine,
    Live,
    Game,
    ClientServer
}, {
    /* 主屏幕的标题配置现在在这里 */
    //headerMode: 'none',
    navigationOptions: ({navigation}) => ({
        tabBarIcon:({focused}) => {
            
            let normalImage;
            let selectedImage;
            const { routeName } = navigation.state;

            switch (routeName){

                case 'Mine' :
                normalImage = require('./src/img/gerenzhongxin.png');
                selectedImage = require('./src/img/gerenzhongxinhover.png');
                break;

                case 'Live' :
                normalImage = require('./src/img/meinvzibo.png');
                selectedImage = require('./src/img/meinvzibohover.png');
                break;

                case 'Game' :
                normalImage = require('./src/img/yuledating.png');
                selectedImage = require('./src/img/yuledatinghover.png');
                break;

                case 'ClientServer' :
                normalImage = require('./src/img/kefu.png');
                selectedImage = require('./src/img/kefuhover.png');
                break;

                default :

                break;

            }

            return <TabBarItem
                        focused={focused}
                        normalImage={normalImage}
                        selectedImage={selectedImage}
                        />
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});

const RootStack = createStackNavigator({
    Tab: {
        screen: BottomTabNavigator,
        navigationOptions: {
            header: null,
        }
    },
    Login:{
        screen: Login
    }
}, {
    /* 主屏幕的标题配置现在在这里 */
    //headerMode: 'none',
    headerLayoutPreset :'center',
    navigationOptions: ({navigation}) => ({
        title: navigation.state.routeName,
        headerStyle: {
            backgroundColor: '#ef4d3e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerLayoutPreset:'center',
    })
});

export default RootStack;
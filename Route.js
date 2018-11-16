import React, {Component} from 'react';
import {StatusBar,Easing,Animated} from 'react-native';
import TabBarItem from './src/component/TabBarItem';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Game from './src/pages/Game';
import Live from './src/pages/Live';
import Mine from './src/pages/Mine';
import Login from './src/pages/Login';
import ClientServer from './src/pages/ClinetServer';
import ModifyPassword from './src/pages/ModifyPassword';
import AnchorCollectionList from './src/pages/AnchorCollectionList';
import MyGrade from './src/pages/MyGrade';
import MyEarnings from './src/pages/MyEarnings'
import EarningDetail from './src/pages/EarningDetail'
import MemberPrivileges from './src/pages/MemberPrivileges'
import LiveGirls from './src/pages/LiveGirls'
import SearchAnchor from './src/pages/SearchAnchor'
import AboutUs from './src/pages/AboutUs'
import ShareCode from './src/pages/ShareCode'

const BottomTabNavigator = createBottomTabNavigator({
    Mine,
    Live,
    Game,
    ClientServer
}, {
    /* 主屏幕的标题配置现在在这里 */
    //headerMode: 'none',
    navigationOptions: ({navigation}) => ({
        tabBarOnPress:(navigation)=>{
            
            const routeName = navigation.navigation.state.routeName;
            
            switch (routeName){
                case 'Mine':
                StatusBar.setBackgroundColor('rgb(232,54,38)',true);
                break;
                default:
                break;
            }

            navigation.defaultHandler()

        },
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
    Login:{screen: Login},
    ModifyPassword:{screen:ModifyPassword},
    AnchorCollectionList:{screen:AnchorCollectionList},
    MyGrade:{screen:MyGrade},
    MyEarnings:{screen:MyEarnings},
    EarningDetail:{screen:EarningDetail},
    MemberPrivileges:{screen:MemberPrivileges},
    LiveGirls:{screen:LiveGirls},
    SearchAnchor:{screen:SearchAnchor},
    AboutUs:{screen:AboutUs},
    ShareCode:{screen:ShareCode}
}, {
    /* 主屏幕的标题配置现在在这里 */
    //headerMode: 'none',
    headerLayoutPreset :'center',
    navigationOptions: ({navigation}) => ({
        title: navigation.state.routeName,
        headerStyle: {
            backgroundColor: 'rgb(232,54,38)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }),
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;
            const Width = layout.initWidth;
            //沿X轴平移
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [Width, 0, -(Width - 10)],
            });
            //透明度
            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });
            return {opacity, transform: [{translateX}]};
        }

      }),
});

export default RootStack;
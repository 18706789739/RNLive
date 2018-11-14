import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {
    View,Text,Image,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions,
    ImageBackground,
} from 'react-native';
import MarqueeLabel from 'react-native-lahk-marquee-label';
import LinearGradient from 'react-native-linear-gradient';

export default class LiveGirls extends Component {
    static navigationOptions =  ({ nasvigation }) =>({
        title: '美女直播',
        headerRight: (
      <TouchableOpacity>
            <Image style={{width:26,height:26,marginRight:12}} source={require('../img/sousuo.png')} />          
      </TouchableOpacity>
    ),
    });
    render(){
        return (
            <ScrollView style={{backgroundColor:'#FFF'}}>
                
                <Swiper style={styles.banner} showsPagination={false} autoplay={true} autoplayTimeout={3}>
                    <Image style={styles.img} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541054358&di=7e776af37b4fc3fc31b27b585938b1b3&imgtype=jpg&er=1&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20170706%2F9840431499320881.jpg'}} />
                    <Image style={styles.img} source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336905577,2525397483&fm=11&gp=0.jpg'}} />
                </Swiper>
                <View style={styles.marqueeBox}>
                    <Image style={styles.marqueeIcon} source={require('../img/xiaoxi.png')} />
                    <MarqueeLabel
                        textContainerStyle={styles.marquee}
                        duration={8000}
                        text={'宝龙一号 买一送一 特惠活动！'}
                        textStyle={{ fontSize: 13, color: 'rgb(232,54,38)' }}
                    />
                </View>
                <View style={styles.container}>
                    <View style={styles.liveItem}>
                        <TouchableOpacity activeOpacity={0.85} style={{flex:1}} onPress={console.log(6)}>
                            <ImageBackground style={styles.windowBackground} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541054358&di=7e776af37b4fc3fc31b27b585938b1b3&imgtype=jpg&er=1&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20170706%2F9840431499320881.jpg'}} >
                                <View style={styles.topTextBox}>
                                    <LinearGradient style={{flex:1}} colors={['rgba(0,0,0,.5)', 'transparent']} >
                                    <Text style={styles.topText}>直播中</Text>
                                    </LinearGradient>
                                </View>
                                <View style={styles.bottomTextBox}>
                                    <LinearGradient style={{flex:1}} colors={['transparent','rgba(0,0,0,.8)']} >
                                    <View><Text style={styles.name} >主播小兔兔</Text></View>
                                    <View style={styles.titleBox}>
                                        <Text style={styles.title} numberOfLines={1}>怎么可以吃兔aaabbb123</Text>
                                        <Text style={styles.number}>250人观看</Text>
                                    </View>
                                    </LinearGradient>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.liveItem}>
                        <TouchableOpacity activeOpacity={0.85} style={{flex:1}} onPress={console.log(6)}>
                            <ImageBackground style={styles.windowBackground} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541054358&di=7e776af37b4fc3fc31b27b585938b1b3&imgtype=jpg&er=1&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20170706%2F9840431499320881.jpg'}} >
                                <View style={styles.topTextBox}>
                                    <LinearGradient style={{flex:1}} colors={['rgba(0,0,0,.5)', 'transparent']} >
                                    <Text style={styles.topText}>直播中</Text>
                                    </LinearGradient>
                                </View>
                                <View style={styles.bottomTextBox}>
                                    <LinearGradient style={{flex:1}} colors={['transparent','rgba(0,0,0,.8)']} >
                                    <View><Text style={styles.name} >主播小兔兔</Text></View>
                                    <View style={styles.titleBox}>
                                        <Text style={styles.title} numberOfLines={1}>怎么可以吃兔aaabbb123</Text>
                                        <Text style={styles.number}>250人观看</Text>
                                    </View>
                                    </LinearGradient>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
                

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    banner:{
        height:170,
    },
    marqueeBox:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        overflow:'hidden'
    },
    marqueeIcon:{
        height:20,
        width:20,
        zIndex:99,
        backgroundColor:"#FFF"
    },
    marquee:{
        height:20,
        zIndex:1,
    },
    titleBox:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    name:{
        fontSize:12,
        color:'#FFF',
        paddingLeft:5
    },
    title:{
        color:'#FFF',
        lineHeight:20,
        paddingLeft:5,
        width:'60%',
        fontSize:10,
    },
    number:{
        fontSize:12,
        color:'#FFF',
        paddingRight:5,
        textAlign:"right",
        lineHeight:20,
    },
    bottomTextBox:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0
    },
    topTextBox:{
        height:30,
    },
    topText:{
        textAlign:"right",
        paddingRight:5,
        height:30,
        lineHeight:30,
        color:'#FFF',
        fontSize:10
    },
    windowBackground:{
        flex:1
    },
    liveItem:{
        flexBasis:'50%',
        height:170,
        flexShrink:0,
        marginTop:5,
        paddingLeft:2.5,
        paddingRight:2.5
    },
    container:{
        marginLeft:7.5,
        marginRight:7.5,
        flexDirection:'row',
        flexWrap:'wrap',
    },
    img: {
        width: Dimensions.width,
        height: 170,
    }
})
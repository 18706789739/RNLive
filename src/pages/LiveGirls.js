import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {
    View,Text,Image,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';

export default class LiveGirls extends Component {
    static navigationOptions =  ({ nasvigation }) =>({
        title: '直播大厅',
    });
    render(){
        return (
            <ScrollView style={{backgroundColor:'#FFF'}}>
                
                <Swiper style={styles.banner} showsButtons={true} autoplay={true} autoplayTimeout={2.5}>
                    <Image style={styles.img} source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336905577,2525397483&fm=11&gp=0.jpg'}} />
                    <Image style={styles.img} source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336905577,2525397483&fm=11&gp=0.jpg'}} />
                </Swiper>

                <View style={styles.container}>
                    <View style={styles.liveItem}>
                        <TouchableOpacity onPress={console.log(6)}>
                            <Text style={styles.liveItemTitle}>666秀场</Text>
                            <Image style={styles.liveItemImg} source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336905577,2525397483&fm=11&gp=0.jpg'}} />
                            <Text style={styles.liveItemNum}>直播人数：99</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.liveItem}>
                        <TouchableOpacity onPress={console.log(6)}>
                            <Text style={styles.liveItemTitle}>666秀场</Text>
                            <Image style={styles.liveItemImg} source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336905577,2525397483&fm=11&gp=0.jpg'}} />
                            <Text style={styles.liveItemNum}>直播人数：99</Text>
                        </TouchableOpacity>
                    </View><View style={styles.liveItem}>
                        <TouchableOpacity onPress={console.log(6)}>
                            <Text style={styles.liveItemTitle}>666秀场</Text>
                            <Image style={styles.liveItemImg} source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336905577,2525397483&fm=11&gp=0.jpg'}} />
                            <Text style={styles.liveItemNum}>直播人数：99</Text>
                        </TouchableOpacity>
                    </View><View style={styles.liveItem}>
                        <TouchableOpacity onPress={console.log(6)}>
                            <Text style={styles.liveItemTitle}>666秀场</Text>
                            <Image style={styles.liveItemImg} source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336905577,2525397483&fm=11&gp=0.jpg'}} />
                            <Text style={styles.liveItemNum}>直播人数：99</Text>
                        </TouchableOpacity>
                    </View><View style={styles.liveItem}>
                        <TouchableOpacity onPress={console.log(6)}>
                            <Text style={styles.liveItemTitle}>666秀场</Text>
                            <Image style={styles.liveItemImg} source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336905577,2525397483&fm=11&gp=0.jpg'}} />
                            <Text style={styles.liveItemNum}>直播人数：99</Text>
                        </TouchableOpacity>
                    </View><View style={styles.liveItem}>
                        <TouchableOpacity onPress={console.log(6)}>
                            <Text style={styles.liveItemTitle}>666秀场</Text>
                            <Image style={styles.liveItemImg} source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336905577,2525397483&fm=11&gp=0.jpg'}} />
                            <Text style={styles.liveItemNum}>直播人数：99</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    banner:{
        height:130,
        backgroundColor:'blue'
    },
    liveItemTitle:{
        fontSize:12,
        color:'rgb(232,54,38)',
        height:12,
        lineHeight:12,
        marginBottom:13,
    },
    liveItem:{
        flexBasis:'33.3%',
        flexShrink:0,
        padding:5,
        borderColor:'rgb(230,230,230)',
        borderRightWidth:1,
        borderBottomWidth:1,
    },
    liveItemNum:{
        height:10,
        lineHeight:10,
        marginTop:13,
        alignSelf:'flex-end',
        fontSize:10,
        color:'rgb(232,54,38)'
    },
    liveItemImg:{
        width:50,
        height:50,
        borderRadius:25,
        alignSelf:'center',
    },
    container:{
        marginLeft:12,
        marginRight:12,
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        borderLeftWidth:1,
        borderColor:'rgb(230,230,230)',
    },
    img: {
        width: Dimensions.width,
        height: 130,
    }
})
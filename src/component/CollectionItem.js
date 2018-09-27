import React,{Component} from 'react';
import {
    View,Text,Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
 
export default class CollectionItem extends Component {
 
    render() {
        return(
            <View style={styles.itemContainer}>
                <View style={styles.headerImg}><Image  source={require('../img/guanyuwomen.png')} /></View>
                <View style={styles.itemContent}>
                    <Text style={styles.title}>主播名称</Text>
                    <Text style={styles.text}>正在直播中</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize:12,color:'rgb(254,128,117)'}}>取消关注</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer:{
        paddingLeft:12,
        paddingRight:12,
        paddingTop:9,
        paddingBottom:9,
        borderColor:'rgb(230,230,230)',
        borderBottomWidth:1,
        alignItems:"center",
        flexDirection:'row'
    },
    button:{
        width:64,
        height:24,
        borderColor:'rgb(254,128,117)',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
    },
    headerImg:{
        width:40,
        height:40,
        borderRadius:20,
        marginRight:10,
        alignItems:"center",
        justifyContent:'center'
    },
    itemContent:{
        flexGrow:1,
    },
    title:{
        fontSize:14,
        color:'rgb(102,102,102)'
    },
    text:{
        fontSize:12,
        color:'rgb(254,128,117)'
    }
})
import React,{Component} from 'react';
import {
    Image,
    View,Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
export default class TitleListBar extends Component {

    
    render() {

        let {
            title,
            icon,
            onClick
        } = this.props;

        return(
            <TouchableOpacity onPress={onClick}>
                <View style={styles.barBox}>
                    <Image resizeMode="contain" style={{height:24,marginRight:10}} source={icon} />
                    <Text style={styles.title}>{title}</Text>
                    <Image resizeMode="contain" style={{height:24}} source={require('../img/xiayibu.png')} />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    barBox:{
        flexDirection:"row",
        height:44,
        backgroundColor:"#FFF",
        borderBottomWidth:1,
        borderColor:"#e6e6e6",
        paddingLeft:12,
        paddingRight:12,
        alignItems:'center',
    },
    title:{
        flexGrow:1,
        flex:1,
        fontSize:12,
        color:"rgb(102,102,102)"
    }
})
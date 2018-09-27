import React, {Component} from 'react';
import {
    View,Text,
    Button,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default class MyEarnings extends Component {

    constructor(props){
        super(props)
    }

    openDetail=()=>{
        this.props.navigation.navigate('EarningDetail')
    }

    static navigationOptions = ({navigation})=> {
        return {
            title: '我的收益', // 设置头部标题
            headerRight:  (
                    <TouchableOpacity activeOpacity={.9} onPress={()=>{navigation.navigate('EarningDetail')}}>
                        <View style={{justifyContent:'center',flex:1,}}>
                            <Text style={{color:"#FFF",paddingRight:12,fontSize:12,}}  >
                            收益明细
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
        }
      };
      
    render(){
        return (
            <ScrollView style={{backgroundColor:"#FFF"}}>
                <View style={{alignItems:"center",paddingLeft:24,paddingRight:24}}>
                    <Image style={{width:130,height:130,marginTop:80,marginBottom:45,}} source={require('../img/jinbi.png')} />
                    <Text style={{fontSize:32,color:"rgb(232,54,38)"}}>￥1666</Text>
                    <TouchableOpacity>
                        <Image style={{height:44,marginTop:40,marginBottom:20,}} source={require('../img/chongzhi.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{height:44}} source={require('../img/tixian.png')} />
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    rightButton:{
        
    }
})
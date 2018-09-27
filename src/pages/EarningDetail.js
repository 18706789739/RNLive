import React, {Component} from 'react';
import {
    View,Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

export default class EarningDetail extends Component {
    static navigationOptions = {
        title: '收益明细', // 设置头部标题
      };
      
    render(){
        return (
            <ScrollView style={{backgroundColor:"#FFF"}}>
                <View style={styles.itemContainer}>
                    <View style={styles.earnInfo}>
                        <Text style={styles.earnInfoTitle}>微信转账</Text>
                        <Text style={styles.earnInfoTime}>2018-09-12 09:54</Text>
                    </View>
                    <Text style={{color:"rgb(254,18,117)"}}>+1500.00</Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.earnInfo}>
                        <Text style={styles.earnInfoTitle}>微信转账</Text>
                        <Text style={styles.earnInfoTime}>2018-09-12 09:54</Text>
                    </View>
                    <Text style={{color:"rgb(254,18,117)"}}>+1500.00</Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.earnInfo}>
                        <Text style={styles.earnInfoTitle}>微信转账</Text>
                        <Text style={styles.earnInfoTime}>2018-09-12 09:54</Text>
                    </View>
                    <Text style={{color:"rgb(254,18,117)"}}>+1500.00</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer:{
        borderBottomWidth:1,
        borderColor:'rgb(230,230,230)',
        paddingLeft:12,
        paddingRight:12,
        flexDirection:"row",
        alignItems:'center',
    },
    earnInfo:{
        height:44,
        justifyContent:'center',
        flexGrow:1
    },
    earnInfoTitle:{fontSize:14,color:"rgb(102,102,102)"},
    earnInfoTime:{fontSize:12,color:"rgb(153,153,153)"},


})
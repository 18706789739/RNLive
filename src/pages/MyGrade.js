import React, {Component} from 'react';
import {
    View,Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class MyGrade extends Component {

    constructor(props){
        super(props);
        this.state = {
            gradeBar:0.1,
        }
    }

    static navigationOptions =  ({ nasvigation }) =>({
        title: '我的等级',
    });

    render(){

        const {
            gradeBar
        } = this.state

        return (
            <ScrollView style={{backgroundColor:"#FFF"}}>
                <LinearGradient colors={['#e83626', '#fe8075']} >
                <View style={styles.headerContainer}>
                    <View style={styles.headerContent}>
                        <Text style={{color:"#FFF",fontSize:12}}>1006</Text>
                        <View style={styles.gradeBar}>
                            <View style={{flex:gradeBar,backgroundColor:'rgb(254,128,117)'}}></View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:"center"}}>
                            <Text style={{color:"#FFF",fontSize:12}}>黄金会员</Text>
                            <Text style={{flexGrow:1,textAlign:'center',color:"#FFF",fontSize:10}}>距离下一等级还差496</Text>
                            <Text style={{color:"#FFF",fontSize:12}}>黄金会员</Text>
                        </View>
                    </View>
                </View>
                </LinearGradient>
                <View style={{paddingTop:20,paddingLeft:24,paddingRight:24}}>
                    <LinearGradient style={{borderTopLeftRadius:4,borderTopRightRadius:4}} colors={['#e83626', '#fe8075']} >
                        <View style={{flexDirection:'row',height:30,alignItems:'center'}}>
                            <Text style={{color:"#FFF",fontSize:14,textAlign:'center',flex:1.5}}>对应等级</Text>
                            <Text style={{color:"#FFF",fontSize:14,textAlign:'center',flex:2}}>积分范围</Text>
                            <Text style={{color:"#FFF",fontSize:14,textAlign:'center',flex:2}}>会员权益</Text>
                        </View>
                    </LinearGradient>
                        <View style={{backgroundColor:'rgb(230,230,230)',borderBottomLeftRadius:4,borderBottomRightRadius:4}}>
                            <View style={styles.gradeTr}>
                                <Text style={styles.gradeTdTitle}>青铜会员</Text>
                                <Text style={styles.gradeTd}>1-500</Text>
                                <Text style={styles.gradeTd}>青铜等级标示</Text>
                            </View>
                            <View style={styles.gradeTr}>
                                <Text style={styles.gradeTdTitle}>白银会员</Text>
                                <Text style={styles.gradeTd}>500-1000</Text>
                                <Text style={styles.gradeTd}>白银等级标示</Text>
                            </View>
                            <View style={styles.gradeTr}>
                                <Text style={styles.gradeTdTitle}>黄金会员</Text>
                                <Text style={styles.gradeTd}>1000-1500</Text>
                                <Text style={styles.gradeTd}>黄金等级标示</Text>
                            </View>
                            <View style={styles.gradeTr}>
                                <Text style={styles.gradeTdTitle}>铂金会员</Text>
                                <Text style={styles.gradeTd}>1500-2000</Text>
                                <Text style={styles.gradeTd}>铂金等级标示</Text>
                            </View>
                            <View style={[styles.gradeTr]}>
                                <Text style={styles.gradeTdTitle}>钻石会员</Text>
                                <Text style={styles.gradeTd}>2500-3000</Text>
                                <Text style={styles.gradeTd}>钻石等级标示</Text>
                            </View>
                        </View>
                </View>
            </ScrollView>
        )
    }
    
}

const styles = StyleSheet.create({
    gradeTr:{
        flexDirection:'row',
        height:30,
        alignItems:'center',
    },
    gradeTdTitle:{
        color:"rgb(102,102,102)",fontSize:12,textAlign:'center',flex:1.5
    },
    gradeTd:{
        color:"rgb(102,102,102)",fontSize:12,textAlign:'center',flex:2
    },
    headerContainer:{
        paddingTop:50,
        paddingBottom:50,
        alignItems:'center'
    },
    headerContent:{
        width:250,
    },
    gradeBar:{
        marginTop:10,
        marginBottom:10,
        borderRadius:4,
        height:4,
        backgroundColor:'#FFF',
        flexDirection:'row'
    }
})
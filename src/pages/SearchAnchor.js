import React, {Component} from 'react';
import {
    View,Image,Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import CollectionItem from '../component/CollectionItem';
import TextInputItem from '../component/TextInputItem';

export default class SearchAnchor extends Component {

    constructor(props){
        super(props);
        this.state = {
            keyword:''
        }
    }

    onSearchChange = (keyword)=>{
        this.setState({
            keyword:keyword
        })
    }

    goBack = ()=>{
        this.props.navigation.goBack();
    }

    static navigationOptions =  ({ navigation }) =>({
        header:null
    });

    render(){
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress = {this.goBack}>
                        <Image style={styles.goback} resizeMode="contain" source={require('../img/fanhui.png')} />
                    </TouchableOpacity>
                    <View style={{flex:1,backgroundColor:"#FFF",borderRadius:4}}>
                        <TextInputItem 
                            imgSource={require('../img/sousuoh.png')}
                            value={this.state.keyword} 
                            onChange={this.onSearchChange}
                            placeholder="请输入用户ID进行搜索"
                            boxStyles={{borderWidth:0,paddingLeft:10}}
                            reInputStyles={{height:40}}
                        />
                    </View>
                    <TouchableOpacity>
                        <View style={styles.searchButton}><Text style={{fontSize:12,color:"#FFF",textAlign:'center'}}>搜索</Text></View>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{backgroundColor:"#FFF"}}>
                    <CollectionItem />
                    <CollectionItem />
                    <CollectionItem />
                </ScrollView>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    searchButton:{
        width:50,
    },
    goback:{
        width:35,
        marginLeft:15,
        height:30,
    },
    header:{
        height:56,
        backgroundColor:'rgb(232,54,38)',
        flexDirection:'row',
        alignItems:"center"
    }
})
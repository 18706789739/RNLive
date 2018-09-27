import React, {Component} from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import CollectionItem from '../component/CollectionItem';

export default class AnchorCollectionList extends Component {

    static navigationOptions =  ({ navigation }) =>({
        title: '收藏主播',
    });

    render(){
        return (
            <ScrollView style={{backgroundColor:"#FFF"}}>
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
            </ScrollView>
        )
    }
    
}
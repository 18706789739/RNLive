import React,{Component} from 'react';
import {
    Image,View,Text,
    Modal,
    Animated,
    FlatList,
    StyleSheet,
} from 'react-native';
 
export default class ShareDialog extends Component {
    state = {
        modalVisible:true,
        fadeAnim: new Animated.Value(1),  // 透明度初始值设为0
    }

    static defaultProps = {
        shareData: [
            {
                name:'新浪微博',
                source:require('../img/weiboshare.png'),
            },
            {
                name:'微信好友',
                source:require('../img/weixinshare.png'),
            },
            {
                name:'朋友圈',
                source:require('../img/pengyouquan.png'),
            },
            {
                name:'QQ好友',
                source:require('../img/qqhaoyou.png'),
            },
            {
                name:'QQ空间',
                source:require('../img/qqkongjian.png'),
            },
        ]
    }

    shareDiglogShow(){
        Animated.timing(                  // 随时间变化而执行动画
            this.state.fadeAnim,            // 动画中的变量值
            {
              toValue: 0,                   // 透明度最终变为1，即完全不透明
              duration: 2000,              // 让动画持续一段时间
            }
          ).start();  
    }

    _renderItem = ({item}) => (
        <View style={styles.selectItem}>
            <Image style={{height:50,width:50}} resizeMode="stretch" source={item.source} />
            <Text style={styles.selectItemText}>{item.name}</Text>
        </View>
    );
 
    render() {

        let { fadeAnim } = this.state;
        console.log(this.props.shareData)
        return(
            <Modal 
            animationType={"fade"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose ={()=>{}}>
                <Animated.View style={[styles.shadow]}>

                </Animated.View>
                <Animated.View style={[styles.selectContainer,{opacity:fadeAnim}]}>
                    <FlatList horizontal={true}  style={styles.select} 
                    data={this.props.shareData}
                    renderItem={this._renderItem}>
                    </FlatList>
                    <View style={{height:80}}>
                        <Text>888</Text>
                    </View>
                </Animated.View>
            </Modal>
        )

    }
}

const styles = StyleSheet.create({
    select:{
        paddingTop:20,
        paddingBottom:20,
    },
    selectItem:{
        width:60,
        marginLeft:10,
        marginRight:10,
        alignItems:'center'
    },
    selectItemText:{
        fontSize:10,textAlign:'center',lineHeight:30,
    },
    shadow:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.6)',
    },
    selectContainer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'white',
    }
})
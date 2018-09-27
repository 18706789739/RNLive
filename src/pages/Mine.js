import React, {Component} from 'react';
import {
    View,Text,
    StyleSheet,
    BVLinearGradient,
    Image,
    ScrollView,
    TouchableOpacity,
    Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TitleListBar from '../component/TitleListBar';

export default class Mine extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalVisible:false,
        }
    }
    componentWillMount(){
        this.props.navigation.navigate('MemberPrivileges', { name: 'Brent' })
    }
    static navigationOptions = {
        title: '个人中心', // 设置头部标题
      };
    render(){
        return (
            <ScrollView>
                <Modal 
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose ={()=>{}}>
                    <TouchableOpacity style={{flex:1}} onPress={()=>{
                        this.setState({modalVisible:false})
                    }}>
                        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:'rgba(0,0,0,0.5)'}}>
                            <View style={{alignItems:"center",width:200,height:150,padding:10,backgroundColor:"#FFF",borderRadius:8,overflow:"hidden"}}>
                                    <Text style={{color:"rgb(232,54,38)",fontSize:16}}>请输入邀请码</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <LinearGradient colors={['#e83626', '#fe8075']} >
                    <View style={styles.header}>
                        <View style={{alignItems:"center"}}>
                            <Image style={{height:60,width:60}} resizeMode="stretch" source={require('../img/touxiang.png')} />
                            <Text style={styles.headerText}>ID:6666</Text>
                            <Text style={styles.headerText}>被遗忘的希望</Text>
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.headerNavBox}>
                    <View style={styles.headerNavItem}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AnchorCollectionList')}} style={{alignItems:'center'}}>
                            <Image style={styles.headerNavItemImg} resizeMode="stretch" source={require('../img/shoucang.png')} />
                            <Text style={styles.headerNavItemText} >收藏主播</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerNavItem}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('MyGrade')}} style={{alignItems:'center'}}>
                            <Image style={styles.headerNavItemImg} resizeMode="stretch" source={require('../img/wodedengji.png')} />
                            <Text style={styles.headerNavItemText}>我的等级</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerNavItem}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('MyEarnings')}} style={{alignItems:'center'}}>
                            <Image style={styles.headerNavItemImg} resizeMode="stretch" source={require('../img/wodeshouyi.png')} />
                            <Text style={styles.headerNavItemText}>我的收益</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerNavItem}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image style={styles.headerNavItemImg} resizeMode="stretch" source={require('../img/youhuihuodong.png')} />
                            <Text style={styles.headerNavItemText}>优惠活动</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerNavItem}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image style={styles.headerNavItemImg} resizeMode="stretch" source={require('../img/lingqufuli.png')} />
                            <Text style={styles.headerNavItemText}>领取福利</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{height:4,backgroundColor:"#e5e5e5"}}></View>

                <TitleListBar 
                    title="会员特权（会员等级说明）"
                    onClick={()=>{this.props.navigation.navigate('MemberPrivileges')}}
                    icon={require('../img/huiyuantequan.png')}
                 />
                 <TitleListBar 
                    title="卡密激活（找代理购买卡密激活码）"
                    icon={require('../img/kamijihuo.png')}
                 />
                 <TitleListBar 
                    title="我要试看（输入邀请码，免费增加试看30分钟）"
                    onClick={()=>{this.setState({modalVisible:true})}}
                    icon={require('../img/woyaoshikan.png')}
                 />
                 <TitleListBar 
                    title="邀请好友免费观看（您的分享码：12345678）"
                    icon={require('../img/yaoqinghaoyou.png')}
                 />
                 <TitleListBar 
                    title="分享二维码（增加免费观看时间）"
                    icon={require('../img/fenxiangerweima.png')}
                 />
                 <TitleListBar 
                    title="联系客服（任何问题请点击这里联系APP客服）"
                    icon={require('../img/lianxikefu.png')}
                 />

                <View style={{height:8,backgroundColor:"#e5e5e5"}}></View>

                <TitleListBar 
                    title="修改密码"
                    onClick={()=>{this.props.navigation.navigate('ModifyPassword',{title:'修改密码'})}}
                    icon={require('../img/xiugaimima.png')}
                 />
                 <TitleListBar 
                    title="检查更新"
                    icon={require('../img/jianchagengxin.png')}
                 />
                 <TitleListBar 
                    title="申请代理"
                    icon={require('../img/shenqingdaili.png')}
                 />
                 <TitleListBar 
                    title="关于我们"
                    icon={require('../img/guanyuwomen.png')}
                 />
                 <TitleListBar 
                    title="退出登录"
                    icon={require('../img/tuichu.png')}
                 />

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        paddingTop:10,
        paddingBottom:35,
    },
    headerText:{
        marginTop:0,
        fontSize:16,
        color:"#FFF"
    },
    headerNavBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:8,
        backgroundColor:"#FFF",
        paddingBottom:8,
    },
    headerNavItem:{
        flex:1,
    },
    headerNavItemImg:{
        width:30,
        height:30
    },
    headerNavItemText:{
        color:'rgb(102,102,102)',
        fontSize:10,
        marginTop:5
    }
})
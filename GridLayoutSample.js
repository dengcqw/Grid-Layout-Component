/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var GridLayoutView = require('./GridLayoutView.ios.js');
var ArbitraryGridView = require('./ArbitraryGridLayoutView.js');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} = React;

var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').heigth;

var GridlayoutSample = React.createClass({
    render: function() {
    {
        var part_1_left_view =(
            <View key ='part_1_left_view' style={styles.part_1_left}>
                <Text style={[styles.font14, styles.marTop18, styles.marLeft10, styles.green]}>我们约吧</Text>
                <Text style={[styles.font10, styles.marTop14, styles.marLeft10]}>恋爱家人好朋友</Text>
                <Image style={[styles.yue]} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
            </View>
        );
        var part_1_right_top_view = (
            <View key='part_1_right_top_view' style={[{flex:1, flexDirection:'row',}]}>
                <View style={{flex:1, justifyContent:'center' }}>
                    <Text style={[styles.font14, {marginLeft:30}, styles.red]}>超低价值</Text>
                    <Text style={[styles.font14, {fontSize:12, marginTop:14, marginLeft:30,color: 'black'}]}>十元惠生活</Text>
                </View>
                <View style={[{flex:1, marginTop:1, justifyContent:'center' }]}>
                    <Image style={[styles.hanbao]} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}></Image>
                </View>
            </View>
        );
        var part_1_right_bottom_view_1 = (
            <View key='part_1_right_bottom_view_1' style={[{flex:1,justifyContent:'center', },]}>
                        <Text style={{color:'#F742AB', marginLeft:5,fontWeight:'bold', fontSize:15, marginTop:8}}>聚餐宴请</Text>
                <Text style={{fontSize:12,marginTop:4, marginLeft:5}}>朋友家人常聚聚</Text>
                <Image style={{height:25,width:25, alignSelf: 'center'}} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}></Image>
            </View>
        );
        var part_1_right_bottom_view_2 = (
            <View key='part_1_right_bottom_view_2' style={[{flex:1,justifyContent:'center'}, ]}>
                <Text style={[styles.font14, {color:'#FF8601', marginTop:8, marginLeft:5}]}>名店抢购</Text>
                <Text style={[{marginLeft:5, fontSize:12,marginTop:4,}]}>还有</Text>
                <Text style={[{marginLeft:5, fontSize:12,marginTop:4,}]}>12:06:12分</Text>
            </View>
        );
        var part_1_right_bottom_view_3 = (
            <View key='part_1_right_bottom_view_3' style={[{flex:1,justifyContent:'center', },]}>
                        <Text style={{color:'#F742AB', marginLeft:5,fontWeight:'bold', fontSize:15, marginTop:8}}>聚餐宴请</Text>
                <Text style={{fontSize:12,marginTop:4, marginLeft:5}}>朋友家人常聚聚</Text>
                <Image style={{height:25,width:25, alignSelf: 'center'}} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}></Image>
            </View>
        );
        var part_1_right_bottom_view_4 = (
            <View key='part_1_right_bottom_view_4' style={[{flex:1,justifyContent:'center'}, ]}>
                <Text style={[styles.font14, {color:'#FF8601', marginTop:8, marginLeft:5}]}>名店抢购</Text>
                <Text style={[{marginLeft:5, fontSize:12,marginTop:4,}]}>还有</Text>
                <Text style={[{marginLeft:5, fontSize:12,marginTop:4,}]}>12:06:12分</Text>
            </View>
        );
        var part_2_view = (
            <View key='part_2_view' style={{borderBottomWidth:0.0,borderTopWidth:0.5, borderColor:'#DDD8CE', marginTop:40, height:65, flexDirection: 'row',}}>
                <View style={[{flex:1,justifyContent:'center', alignItems:'center'}]}>
                    <Text style={{ fontSize:17, color:'#FF7F60', fontWeight:'900', }}>一元吃大餐</Text>
                    <Text style={{ fontSize:12, }}>新用户专享</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{height:50, width:120}} source={{uri:'http://p1.meituan.net/280.0/groupop/7f8208b653aa51d2175848168c28aa0b23269.jpg'}}></Image>
                </View>
            </View>
        );

        var part_3_view_1 = (
            <View key='part_3_view_1' style={[{flex:1}, styles.row]}>
              <View style={{}}>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>撸串节狂欢</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>烧烤6.6元起</Text>
              </View>
              <View style={{flex:1}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png'}}></Image>
              </View>
            </View>
        );
        var part_3_view_2 = (
            <View key='part_3_view_2' style={[{flex:1}, styles.row]}>
              <View style={{}}>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>毕业旅行</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>选好酒店才安心</Text>
              </View>
              <View style={{flex:1}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>
              </View>
            </View>
        );
        var part_3_view_3 = (
            <View key='part_3_view_3' style={[{flex:1}, styles.row]}>
              <View style={{}}>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>0元餐来袭</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>免费吃喝玩乐购</Text>
              </View>
              <View style={{}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p0.meituan.net/280.0/groupop/6bf3e31d75559df76d50b2d18630a7c726908.png'}}></Image>
              </View>
            </View>
        );
        var part_3_view_4 = (
            <View key='part_3_view_4' style={[{flex:1}, styles.row ]}>
              <View style={{}}>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>热门团购</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>大家都在买什么</Text>
              </View>
              <View style={{}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png'}}></Image>
              </View>
            </View>
        );
    }

    var arbitraryLayout = {
        left:{
        },
        right:{
            top:{},
            bottom:{
                left:{},
                right:{},
                flexRatio:'1:1',
            },
            flexRatio:'1:1',
        },
        flexRatio:'1:2',
    };

    //var arbitraryLayout = {
        //left:{
            //top:{
                //left:part_1_right_bottom_view_1,
                //right:part_1_right_bottom_view_1,
                //flexRatio:'1:1',
            //},
            //bottom:{
                //left:part_1_right_bottom_view_1,
                //right:part_1_right_bottom_view_1,
                //flexRatio:'1:1',
            //},
            //flexRatio:'1:1',
        //},
        //right:part_1_right_bottom_view_1,
        //flexRatio:"2:1",
    //}
    //
    //var arbitraryLayout = {
        //left:{
        //},
        //right:{
            //top:{
                //left:{},
                //right:{},
                //flexRatio:'1:1',
            //},
            //bottom:{
                //left:{},
                //right:{},
                //flexRatio:'1:1',
            //},
            //flexRatio:'1:1',
        //},
        //flexRatio:'3:5',
    //}

    return (

      <ScrollView
        automaticallyAdjustContentInsets={false}
        horizontal={false}
        style={{ height:screenH, width:screenW }}>

            <View style={{ flex:1 }}>
                <View style = {{height:20}}/>

                < ArbitraryGridView layout = {arbitraryLayout} >
                {[
                    part_1_right_bottom_view_1,
                    part_1_right_bottom_view_2,
                    part_1_right_bottom_view_3,
                    part_1_right_bottom_view_4,
                    part_1_right_bottom_view_4,
                    part_1_right_bottom_view_3,
                    part_1_right_bottom_view_2,
                    part_1_right_bottom_view_1,
                ]}
                < /ArbitraryGridView >

                {part_2_view}

                <GridLayoutView column='2' view_height='80'>
                    {[
                        part_3_view_1,
                        part_3_view_2,
                        part_3_view_3,
                        part_3_view_4,
                    ]}
                </GridLayoutView>
            </View>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        paddingTop:20
    },
    marTop18:{
        marginTop:18,
    },
    marTop14:{
        marginTop:14,
    },
    font14:{
        fontSize:14,
    },
    font10:{
        fontSize:12,
    },
    height160:{
        height: 160
    },
    yue:{
        height:80,
    },
    green:{
        color:'#55A44B',
        fontWeight: '900'
    },
    red:{
        color: '#FF3F0D',
        fontWeight: '900'
    },
    marLeft10:{
        marginLeft:10,
    },
    part_1_left:{
        flex: 1,
        height: 167,

    },
    part_1_right:{
        flex:2,
        borderColor: '#DCD7CD',
        borderBottomWidth: 0.5,
        borderTopWidth:0.5,
    },
    hanbao:{
        height:55,
        width:55
    },
    part2_mid_style: {
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: '#DDD8CE',
        marginTop: 40,
        height: 65,
        flexDirection: 'row',
        paddingTop: 10
    },

    part1_right_bottom_style: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderColor: '#DDD8CE'
    },
    topBorder: {
        borderTopWidth:0.5,
        borderColor:'#DDD8CE'
    },
    leftBorder: {
        borderLeftWidth:0.5,
        borderColor:'#DDD8CE'
    },
    bottomBorder: {
        borderBottomWidth:0.5,
        borderColor:'#DDD8CE'
    },
    rightBorder: {
        borderRightWidth:0.5,
        borderColor:'#DDD8CE'
    },
});

module.exports = GridlayoutSample;

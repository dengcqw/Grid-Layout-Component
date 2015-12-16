/**
 * ArbitraryGridLayoutView.js
 * haofangtuo

 * Created by DengJinlong on 12/11/15.
 * Copyright (c) 2015 平安好房. All rights reserved.
 */

'use strict'

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    View,
} = React;

/**
 * Globle Variable
 */
var topLayout;
var topViewList;
var viewIndex = 0;


/**
 * Reactive Native Class
 */
var ArbitraryGridView = React.createClass({

    _fillLayoutObjWithView: function ( layout, viewList ) {
        var i = 0;

        var walkLayout = function (layout, subLayout) {
            if (subLayout.flexRatio) {
                if (subLayout.left) {
                    walkLayout(subLayout, subLayout.left);
                }
                if (subLayout.right) {
                    walkLayout(subLayout, subLayout.right);
                }
                if (subLayout.top) {
                    walkLayout(subLayout, subLayout.top);
                }
                if (subLayout.bottom) {
                    walkLayout(subLayout, subLayout.bottom);
                }
            } else {
            }
        }


    },

    // if viewList is undefined, then assume layout contain subview node.
    _layoutSubViews: function(layout, viewList) {
        var flexs = layout.flexRatio.split(':');
        flexs = flexs.map(function (element, index) {
            return Number(element);
        });

        var subLayouts;
        var borderStyle;

        if ( layout.left === undefined ) {
            subLayouts = [layout.top, layout.bottom];
            borderStyle = styles.bottomBorder;
        } else {
            subLayouts = [layout.left, layout.right];
            borderStyle = styles.rightBorder;
        }

        var subViews = [];
        for (var idx = 0; idx < subLayouts.length; idx++) {

            var layout = subLayouts[idx];
            var dynamicKey;
            var subView;
            var direction;

            if ( layout.left === undefined ) {
                direction = 'column';
            } else {
                direction = 'row';
            }

            if (layout.flexRatio == undefined) { // no more subview
                subView = viewList? viewList[idx] : layout;
                dynamicKey = 'ArbGrd-' + direction + String(viewIndex++);
            } else {
                if (viewList) {
                    var partViews = viewList.slice(idx);
                    subView = this._layoutSubViews(layout, partViews);
                } else {
                    subView = this._layoutSubViews(layout);
                }
                dynamicKey = 'ArbGrd-sub-' + direction + '-'+ String(viewIndex++);
            }

            subViews.push(
                < View key ={dynamicKey} style = {[ idx===0? borderStyle : {}, {flex:flexs[idx], flexDirection:direction, overflow: 'hidden',} ]} >
                    {subView}
                < /View >
            );
        }

        return subViews;
    },

    componentWillMount: function () {
        if (this.props.children != undefined) {
            topViewList = this.props.children;
        }

        topLayout = this.props.layout;
    },

    render: function() {
        var direction = (topLayout.left === undefined)? 'column' : 'row';

        return (
            <View style = {[styles.container, styles.topBorder, styles.bottomBorder, {flexDirection:direction} ]}>
                { this._layoutSubViews(topLayout, topViewList) }
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        height:160,
        overflow: 'hidden',
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

/**
 * Private Class
 */

/**
 * Exports
 */
exports.title = 'template file'
exports.description = 'This is template file for iOS Reactive Native develop! Enjoy it.'
exports.examples = [
    {
        render: function() {
            return (
                <ArbitraryGridView
                    layout = {{
                        left:{
                            top:{},
                            bottom:{},
                            flexRatio:'1:1',
                        },
                        right:{
                            top:{},
                            bottom:{},
                            flexRatio:'1:1',
                        },
                        flexRatio:'1:2',
                    }}
                >
                    {[left_topView, left_bottomView, right_topView, right_bottomView,]}
                < /ArbitraryGridView >
            );
        },
    },
    {
        render: function() {
            return (
                <ArbitraryGridView
                    layout = {{
                        left:{
                            top:left_topView,
                            bottom:left_bottomView,
                            flexRatio:'1:1',
                        },
                        right:{
                            top:right_topView,
                            bottom:right_bottomView,
                            flexRatio:'1:1',
                        },
                        flexRatio:'1:2',
                    }}
                />
            );
        },
    },
];


/**
 * Private Component
 */
module.exports = ArbitraryGridView;

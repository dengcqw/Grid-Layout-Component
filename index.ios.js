/**
 * index.ios.js
 * haofangtuo

 * Created by DengJinlong on 16/12/15.
 * Copyright (c) 2015 平安好房. All rights reserved.
 */

'use strict';

var React = require('react-native');
var GridLayoutSample = require('./GridLayoutSample.js');
var {
    AppRegistry,
    StyleSheet,
    View,
} = React;

var AwesomeProject = React.createClass({
    render: function() {
        return (
            < View style = { styles.container } >
            < GridLayoutSample />
            < /View >
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

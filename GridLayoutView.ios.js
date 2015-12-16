/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Dimensions,
} = React;

var contentList = [];
var gridCount;
var gridStyles = [];

var GridLayoutView = React.createClass({

    componentWillMount: function () {
        if (this.props.children != undefined) {
            contentList = this.props.children;
        } else if (this.props.views != undefined){
            contentList = this.props.views;
        }

        var column = Number(this.props.column);
        var row = Math.round(contentList.length / column);
        var viewWidth = Dimensions.get('window').width/column;
        var viewHeight = Number(this.props.view_height);

        gridCount = column*row;
        for (var i = 0; i < gridCount; i++) {

            var elementStyle = [styles.topBorder, {height:viewHeight, width:viewWidth}];
            var curRow = parseInt(i / column);
            if (curRow == row-1)
                elementStyle.push(styles.bottomBorder);

            elementStyle.push(styles.rightBorder);
            if (parseInt(i-curRow*column) == column-1)
                elementStyle.pop();

            gridStyles.push(elementStyle);
        }
    },

    render: function() {
        var viewList = [];
        for (var i = 0; i < gridCount; i++) {

            viewList.push(
                <View key = {'Grid'+String(i)} style={[ gridStyles[i], {overflow: 'hidden',} ]}>
                    {contentList[i]}
                </View>
            );
        };

        return (
            <View style = {{flex:1, flexDirection:'row', flexWrap:'wrap' } }>
                {viewList}
            </View>
        );
    },
});

var styles = StyleSheet.create({
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
 * Exports
 */
exports.title = 'GridLayoutView'
exports.description = 'layout [views] in grid view, need props for [column], [view_height]'

/**
 * Private Component
 */
module.exports = GridLayoutView;

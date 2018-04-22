/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet, 
  TouchableHighlight, //按钮
  Text, //显示文本
  View, //显示视图
  Image, //显示图片
  //需要导入NativeModules组件，这个是官方提供给我们与原生交互的组件，通过它我们才能调用到原生的方法
  NativeModules,
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View>
        <Text style={styles.greetView}>这部分是封装：{this.props.name}!</Text>
        <Text style={styles.greetViewGreen}>这部分是封装：{this.props.name}!</Text>
        <Text style={styles.greetView}>这部分是封装：{this.props.name}!</Text>
      </View>
    );
  }
}

export default class DKSReactNative extends Component {
  render() {
    let pic = {
      uri: 'https://upload-images.jianshu.io/upload_images/1692043-f937ac2eeb4a0ef5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    };
    return (
      <View>
        <View style={styles.contentView}>
          <Text style={styles.instructions}>欢迎使用React Native</Text>
          <Image source={pic} style={styles.img} />
          <Greeting name='调用' />

          <TouchableHighlight 
            style={styles.button}
            onPress={showAlertView}
            >
            <Text style={styles.btnText}>点我哦~</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.flexView}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}

//点击按钮的方法
const showAlertView = () => {
  // alert('React Native Button has been pressed!');
    var KSModules  = NativeModules.KSModule;
    //调用原生注册的方法
    KSModules.KSOpenOneVC('测试');
};

//编写的样式
const styles = StyleSheet.create({
  contentView: {
    alignItems: 'center', //水平居中
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  instructions: {
    color: '#333333',
    marginTop: 10,
  },
  greetView: {
    marginTop: 10,
    color: 'red',
  },
  greetViewGreen: {
    marginTop: 10,
    color: 'green',
  },
  flexView: {
    height: 50, 
    marginTop: 10,
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#841584',
    width: 100,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 17,
    color: 'white',
  }
});

//项目名要有所对应
AppRegistry.registerComponent('DKSReactNative', () => DKSReactNative);
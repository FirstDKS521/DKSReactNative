#iOS开发：React Native的简单使用

![效果GIF](http://uee.me/Pc8f)

###搭建React Native开发环境
>参考文章：[React Native环境搭建](https://reactnative.cn/docs/0.51/getting-started.html#content)

###通过CocoaPods引入React库
这个过程我出现了很多错误，主要是由于Podfile文件中配置的问题，配置正确后，执行`pod install`就直接可以成功，下面是我的配置

>参考文章：[CocoaPods引入React过程](https://reactnative.cn/docs/0.51/integration-with-existing-apps.html#content)

```
# Uncomment the next line to define a global platform for your project
inhibit_all_warnings! #忽略三方库中的警告
platform :ios, '8.0'

target 'DKSReactNative' do

# 如果你的RN版本 >= 0.42.0，则加入下面这行
pod 'yoga', :path => './ReactComponent/node_modules/react-native/ReactCommon/yoga'
pod 'React', :path => './ReactComponent/node_modules/react-native', :subspecs => [
    'Core', #核心库
    'RCTImage',
    'RCTNetwork',
    'RCTText',
    'DevSupport', #如果RN版本 >= 0.43，则需要加入此行才能开启开发者菜单
    'CxxBridge', #用这个代替BatchedBridge
#    'BatchedBridge', #Include if RN >= 0.47，这个已经被弃用
    'RCTWebSocket',
     # 添加你的项目中需要的其他三方库
  ]

end
```
###创建index.ios.js
这里面是看到的页面效果

```
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
```

***

当所有的都配置好以后，进入到`ReactComponent`文件夹下，执行`react-native start`，这行命令相当于是给index.ios.js起个本地服务，这样在模拟器里面才可以访问这个地址

>这个文档写的比较简单，如果想要简单的掌握React Native，我个人觉得有两步：
>
>第一：搭建React Native环境；
>
>第二：在原生工程中安装React Native，此时需要配置一个package.json文件；

以上过程参考文章

[集成到原生项目(iOS)步骤](https://www.jianshu.com/p/3dc9d70a790f)

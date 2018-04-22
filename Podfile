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

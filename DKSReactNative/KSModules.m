//
//  KSModules.m
//  DKSReactNative
//
//  Created by aDu on 2018/4/22.
//  Copyright © 2018年 DuKaiShun. All rights reserved.
//

#import "KSModules.h"
#import <React/RCTBridge.h>

@implementation KSModules
RCT_EXPORT_MODULE(KSModule)
//RN跳转原生界面
RCT_EXPORT_METHOD(KSOpenOneVC:(NSString *)msg) { 
    NSLog(@"RN传入原生界面的数据为:%@", msg);
    //主要这里必须使用主线程发送,不然有可能失效
    dispatch_async(dispatch_get_main_queue(), ^{
        [[NSNotificationCenter defaultCenter] postNotificationName:@"KSOpenOneVC" object:nil];
    });
}

@end

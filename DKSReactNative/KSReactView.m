//
//  KSReactView.m
//  DKSReactNative
//
//  Created by aDu on 2018/4/21.
//  Copyright © 2018年 DuKaiShun. All rights reserved.
//

#import "KSReactView.h"
#import <React/RCTRootView.h>

@implementation KSReactView

- (instancetype)initWithFrame:(CGRect)frame{
    self = [super initWithFrame:frame];
    if (self) {
        NSString *strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
        NSURL *jsCodeLocation = [NSURL URLWithString:strUrl];
        RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"DKSReactNative" initialProperties:nil launchOptions:nil];
        [self addSubview:rootView];
        rootView.frame = self.bounds;
    }
    return self;
}

@end

//
//  ViewController.m
//  DKSReactNative
//
//  Created by aDu on 2018/4/19.
//  Copyright © 2018年 DuKaiShun. All rights reserved.
//

#import "ViewController.h"
#import "SecondViewController.h"
#import "KSReactView.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"React Native";
    
    KSReactView *reactView = [[KSReactView alloc] initWithFrame:CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height - 64)];
    [self.view addSubview:reactView];
    //原生注册通知，供RN来调用发送通知的方法
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(doPushNotification:) name:@"KSOpenOneVC" object:nil];
}

//收到RN的通知
- (void)doPushNotification:(NSNotification *)notification {
    NSLog(@"成功收到===>通知");
    SecondViewController *secondVC = [[SecondViewController alloc]init];
    [self.navigationController pushViewController:secondVC animated:YES];
    //注意不能在这里移除通知否则pus进去后有pop失效，如果再次发送通知时，发送到了一个空指针，导致崩溃
}

//移除通知
- (void)dealloc {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

@end

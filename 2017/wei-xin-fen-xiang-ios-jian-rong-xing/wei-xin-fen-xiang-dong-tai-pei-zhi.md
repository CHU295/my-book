业务场景: 网页里面的微信分享，在一个页面选择A分享出去的标题是A，选择B分享出去的标题是B



微信分享配置只取初始值，不会随着变量变化而重新读取新参数；

上述情况需要重新配置微信分享，也就是让微信初始化函数重新执行一遍

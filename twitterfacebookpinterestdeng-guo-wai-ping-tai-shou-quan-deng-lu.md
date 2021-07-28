```
首先Facebook：

1).在Facebook开发者平台注册自己的application；然后得到appid和应用密钥；

2).接下来就异步引用Facebook的sdk.js并调用初始化方法；

window.fbAsyncInit = function() {
      FB.init({
        appId            : appId,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.10'
      });
      FB.AppEvents.logPageView();
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

调用
FB.login(function (response) {
      //回调
  }, { scope: 'manage_pages,email,pages_manage_cta,publish_actions,publish_pages,read_page_mailboxes' });

至此；Facebook第三方登录前端就完成了！

Twitter；

1).到Twitter开发者平台注册自己的应用；注册成功会得到appkey和API Secret。(在https://apps.twitter.com/上注册自己的app/web)

2).在https://auth-server.herokuapp.com/登录自己的Twitter账号；然后新建一个项目把在Twitter开发者平台注册得到的appkey和API Secret设置到这个项目中，注意一个appkey和API Secret只能设置一个域名，reference描述(举个例子如你的项目叫百度，那就写个百度)，domain就是项目域名(主域名)；grant_url可不填，我是填了的(https://api.twitter.com/oauth/access_token)。(Twitter登录框闪退。如果没在这个网址注册你的项目的话会有点击Twitter闪退的现象，请务必配置)

另外：还有一个问题会导致闪退，那就是在https://apps.twitter.com注册自己的app的时候一定要把Callback URL填上。不然也会出现闪退。Callback URL填的跟一级域名一样

在页面引入Twitter所需的js。
注意的是要引入 http://adodson.com/hello.js/dist/hello.all.js


 window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
       t = window.twttr || {};
       if (d.getElementById(id)) return t;
       js = d.createElement(s);
       js.id = id;
       js.src = "https://platform.twitter.com/widgets.js";
       fjs.parentNode.insertBefore(js, fjs);
 
       t._e = [];
       t.ready = function(f) {
           t._e.push(f);
       };
 
       return t;
 }(document, "script", "twitter-wjs"));

登录调用下面的函数

  hello.init({
      'twitter': appkey,
  });
  hello('twitter').login().then(function (r) {
      console.log(r);//回调
  }, function (e) {
      console.log('Signin error: ' + e.error.message);
  });

```




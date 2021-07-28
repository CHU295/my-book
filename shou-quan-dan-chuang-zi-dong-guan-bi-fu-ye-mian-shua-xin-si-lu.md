```
业务情景是
fb，Twitter，Pinterest等第三方国外网站，授权登录
前端请求后端返回授权地址，前端页面window.open在新页面以弹窗形式打开
然后在新页面登录授权，成功后回调到之前的页面

为了达到授权成功后关闭弹窗原页面刷新

跟后端协调，回调到当前页面，但是http里面添加了参数，这样我在页面js里面可以直接判断
如果是回调，直接执行js，关闭当前页面，刷新父页面

window.onload = ()=>{
        //判断回调
        if(window.location.href.indexOf('isCallback')>0) {
        //是否授权成功
            if(window.location.href.indexOf('errorMessage')>0){
                var reg = new RegExp("(^|&)errorMessage=([^&]*)(&|$)");  
                let msg = window.location.search.substr(1).match(reg)[2]
                //父页面输出错误信息
                window.opener.alertModel(msg)
            }else {
                //成功让父页面关闭
                window.opener.location.reload();
            }
            //关闭弹窗
            window.close()
        }
    }

```




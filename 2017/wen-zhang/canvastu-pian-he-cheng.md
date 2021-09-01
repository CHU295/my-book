不多BB

看代码

# 最后

远程图片请添加后缀，如时间戳，防止微信垃圾浏览器缓存导致失败

```
img.src = data + '?time=' + new Date().valueOf()
```

```
let data = ['code_1.png','code_2.png']
var c=document.createElement('canvas'),
  ctx=c.getContext('2d')
c.width=700;
c.height=1000;
ctx.rect(0,0,c.width,c.height);
ctx.fillStyle='#fff';
ctx.fill();
function drawing(n){
  if(n<data.length){
    var img=new Image();
    img.crossOrigin = 'Anonymous'; //解决跨域
    img.src= data[n];
    img.onload=function(){
      ctx.drawImage(img,0,0,700,1000)
      drawing(n+1);//递归
    }
  }else{
    //保存生成作品图片
    that.setState({
      img: c.toDataURL("image/jpeg",0.8)
    })

    document.getElementById('chu').appendChild(c)
  }
}
drawing(0);
```




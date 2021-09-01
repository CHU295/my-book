说重点

首先在io是必须设置，安卓或者pc必须yes，scrolling=no 

然后样式

```
.iframe-box {
    position: fixed; 
    right: 0; 
    bottom: 0; 
    left: 0;
    top: 0;
    -webkit-overflow-scrolling:touch;
    overflow:auto;
    iframe {
      width: 1px;
      min-width: 100%;
      *width: 100%;
    }
  }
```




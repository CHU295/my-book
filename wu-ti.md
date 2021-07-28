针对垃圾微信浏览器

1. api请求，方便的话给所有请求加上时间戳防止缓存重定向
2. html页面设置不缓存，添加四行代码
   1. ```
      <html manifest="IGNORE.manifest">
      <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="Expires" content="0" />
      ```

1. vue-router防止缓存
   1. ```
      router.beforeEach((to, from, next) => {
        if (to.meta.title) {
          document.title = to.meta.title
        }
        if (to.query.fullTime) {
          next()
        }else {
          let query = to.query
          query.fullTime = new Date().valueOf()
          let route = {
            name: to.name,
            query: query
          }
          console.log(route)
          next(route)
        }
      })
      ```






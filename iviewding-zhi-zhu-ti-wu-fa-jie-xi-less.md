webpack添加配置

```
{ loader: 'less-loader', options: { javascriptEnabled: true } }
```

具体体现在vue-cli

修改一一下util里面的配置

```
return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less', { javascriptEnabled: true }),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
```




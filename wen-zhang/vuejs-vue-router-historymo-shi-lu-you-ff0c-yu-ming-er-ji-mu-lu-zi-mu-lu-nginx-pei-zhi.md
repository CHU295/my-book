\*\*修改三个配置，具体操作日后有时间更新，不懂私聊\*\*

1



\`\`\`

const route = new Router\({

  mode: 'history',

  base: '/doctor-html/',

  routes

}\)

\`\`\`

2



\`\`\`

assetsPublicPath: '/doctor-html/',

\`\`\`

3



\`\`\`

try\_files $uri $uri/ /doctor-html/index.html;

\`\`\`

4

项目目录配置实例

项目路径web/doctor-html/index.html

nginx配置root指向 \*\*web/\*\*   项目放在doctor-html，但是nginx指向web，url访问com/doctor-html就好了


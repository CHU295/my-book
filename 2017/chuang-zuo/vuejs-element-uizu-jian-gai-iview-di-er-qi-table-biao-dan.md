\`\`\`

目前公司业务太忙，项目没来得及适配

使用的时候修改一下项目的webpack配置

\`\`\`



!\[clipboard.png\]\(/img/bVbdFWL\)





\#\# 实现原理

修改了element-ui源码，把源码里面的table模块提取出来

然后修改element自带checkbox等部分组件为iview的checkbox，并且兼容了一大堆写法

最后修改element样式，改为iview风格，自己也添加了一些样式



新的table组件可以说是element的逻辑，iview的风格



 1. 部分代码示例

仅展示部分



\`\`\`

selection: {

    renderHeader: function\(h, { store }\) {

      return &lt;Checkbox

        disabled={ store.states.data && store.states.data.length === 0 }

        indeterminate={ store.states.selection.length &gt; 0 && !this.isAllSelected }

        nativeOn-click={ this.toggleAllSelection }

        value={ this.isAllSelected } /&gt;;

    },

    renderCell: function\(h, { row, column, store, $index }\) {

      return &lt;Checkbox

        nativeOn-click={ \(event\) =&gt; event.stopPropagation\(\) }

        value={ store.isSelected\(row\) }

        disabled={ column.selectable ? !column.selectable.call\(null, row, $index\) : false }

        on-input={ \(\) =&gt; { store.commit\('rowSelectedChanged', row\); } } /&gt;;

    },

\`\`\`



 



 - 列表结构



!\[clipboard.png\]\(/img/bVbdBPK\)





 - 杂言

适配的时候对源码进行了精简，去除了很多不必要的代码，优化了代码结构，缩小了代码体积



\#\#使用方法



必须安装iview



样式风格全部替换成了ivew



功能全部按照element-ui原先一样





npm i chu-table-iview







\`\`\`



import ChuTable from 'chu-table-iview'

import iview from 'iview'



Vue.use\(iview\)

Vue.use\(ChuTable\)





使用文档跟element-ui一模一样



http://element-cn.eleme.io/\#/zh-CN/component/tree



\`\`\`

 - github地址

https://github.com/CHU295/chu-table-element\_ui-to-iview



有问题联系作者

\*\*适配第二期，第一期修改了tree组件，更多查看我得文章\*\*


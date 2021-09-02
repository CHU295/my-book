var vDom = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [{ tag: "A", children: [] }],
    },
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "A", children: [] },
      ],
    },
  ],
};
/* 把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div> */

function getDom(node) {
  let dom = document.createElement(node.tag);
  if (node.attrs) {
    for (const key in node.attrs) {
      dom.setAttribute(key, node.attrs[key]);
    }
  }
  if (node.children) {
    dom.children.forEach((child) => {
      dom.append(getDom(child));
    });
  }
  return dom;
}
getDom(vDom)

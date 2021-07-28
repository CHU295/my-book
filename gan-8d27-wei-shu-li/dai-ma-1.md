```
let a = [1, 6, 9, 36, 84, 12, 2, 5, 1, 74]

//快排
function s(arr) {
  let l = [],
    r = []
  if (arr.length <= 1) {
    return arr
  }
  let m = Math.floor(arr.length / 2)
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < arr[m]) {
      l.push(arr[j])
    } else if (arr[j] > arr[m]) {
      r.push(arr[j])
    }
  }
  return s(l).concat(arr[m], s(r))
}

//冒泡
function v(arr) {
  for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr.length - 1 - a; b++) {
      if (arr[b] > arr[b + 1]) {
        let p = arr[b]
        arr[b] = arr[b + 1]
        arr[b + 1] = p
      }
    }
  }
  return arr
}

//数组去重
Array.from(new Set([1, 2, 3, 1, 2]))
[1, 2, 3, 1, 2].filter((el, index, array) => {
  return index === array.indexOf(el)
})
function sort(arr) {
  var result = {};
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) {
      newArr.push(arr[i]);
      result[arr[i]] = 1;
    }
  }
  return newArr;
}

//ajax
var xhr = new XMLHttpRequest();
xhr.open('PUT', 'myservice/user/1234');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function () {
  if (xhr.status === 200) {
    var userInfo = JSON.parse(xhr.responseText);
  }
};
xhr.send(JSON.stringify({
  name: 'John Smith',
  age: 34
}));

//数组去抖、节流
var debounce = function (idle, action) {
  var last
  return function () {
    var ctx = this,
      args = arguments
    clearTimeout(last)
    last = setTimeout(function () {
      action.apply(ctx, args)
    }, idle)
  }
}
var throttle = function (delay, action) {
  var last = 0
  return function () {
    var curr = +new Date()
    if (curr - last > delay) {
      action.apply(this, arguments)
      last = curr
    }
  }
}

//解析url
/(^|&)"+name+"=([^&]*)(&|$)/g
let arr = []
window.location.search.slice(1).split('&').forEach(element => {
  let a = element.split('=')
  let name = a[0]
  let ob = {}
  ob[name] = a[1]
  arr.push(ob)
})
console.log(arr)

//观察者模式
var event = {}; //发布者（hr）
event.clietList = []; //发布者的缓存列表（应聘者列表）

event.listen = function (fn) { //增加订阅者函数
  this.clietList.push(fn);
};

event.trigger = function () { //发布消息函数
  for (var i = 0; i < this.clietList.length; i++) {
    var fn = this.clietList[i];
    fn.apply(this, arguments);
  }
};

event.listen(function (time) { //某人订阅了这个消息
  console.log('正式上班时间：' + time);
});

event.trigger('2016/10', yes); //发布消息
//输出 正式上班时间:2016/10

//事件监听器
markyun.Event = {
  // 页面加载完成后
  readyEvent: function (fn) {
    if (fn == null) {
      fn = document;
    }
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = fn;
    } else {
      window.onload = function () {
        oldonload();
        fn();
      };
    }
  },
  // 视能力分别使用dom0||dom2||IE方式 来绑定事件
  // 参数： 操作的元素,事件名称 ,事件处理程序
  addEvent: function (element, type, handler) {
    if (element.addEventListener) {
      //事件类型、需要执行的函数、是否捕捉
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, function () {
        handler.call(element);
      });
    } else {
      element['on' + type] = handler;
    }
  },
  // 移除事件
  removeEvent: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.datachEvent) {
      element.detachEvent('on' + type, handler);
    } else {
      element['on' + type] = null;
    }
  },
  // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
  stopPropagation: function (ev) {
    if (ev.stopPropagation) {
      ev.stopPropagation();
    } else {
      ev.cancelBubble = true;
    }
  },
  // 取消事件的默认行为
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  // 获取事件目标
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
  getEvent: function (e) {
    var ev = e || window.event;
    if (!ev) {
      var c = this.getEvent.caller;
      while (c) {
        ev = c.arguments[0];
        if (ev && Event == ev.constructor) {
          break;
        }
        c = c.caller;
      }
    }
    return ev;
  }
};

function EventTarget() {
  this.handlers = {};
}
EventTarget.prototype = {
  constructor: EventTarget,
  addHandler: function (type, handler) {
    if (typeof this.handlers[type] == 'undefined') {
      this.handlers[type] = [];
    }
    this.handlers[type].push(handler)
  },
  fire: function (event) {
    if (!event.target) {
      event.target = this;
    }
    if (this.handlers[event.type] instanceof Array) {
      var handlers = this.handlers[event.type];
      for (var i = 0, len = handlers.length; i < len; i++) {
        handlers[i](event);
      }
    }
  },
  removeHandler: function (type, handler) {
    if (this.handlers[type] instanceof Array) {
      var handlers = this.handlers[type];
      for (var i = 0, len = handlers.length; i < len; i++) {
        if (handlers[i] === handler) {
          break;
        }
      }
      handlers.splice(i, 1);
    }
  }
}

//深拷贝
var cloneObj = function (obj) {
  var str, newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== 'object') {
    return;
  } else if (window.JSON) {
    str = JSON.stringify(obj), //系列化对象
      newobj = JSON.parse(str); //还原
  } else {
    for (var i in obj) {
      newobj[i] = typeof obj[i] === 'object' ?
        cloneObj(obj[i]) : obj[i];
    }
  }
  return newobj;
};
var shallowCopy = function (obj) {
  // 判断是否是数组或者对象
  if (typeof obj !== 'object') {
    return
  }
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
var deepCopy = function (obj) {
  if (typeof obj !== 'object') {
    return
  }
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj
}

//二分
function binarySearch(arr, key) {
  var low = 0,
    high = arr.length - 1,
    mid = Math.floor((low + high) / 2);
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (key == arr[mid]) {
      return mid;
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

//二叉树
// 节点对象的构造函数
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}
//二叉树的构造函数
function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;

}
//插入方法
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}
//调用两次递归遍历二叉树
function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show())
    inOrder(node.right);
  }
}

//将以下数据导入二叉树
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)

//中序遍历二叉树
inOrder(nums.root)
//

//数组扁平化
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flatten(arr))

//三角形
#demo {
  width: 0;
  height: 0;
  border - width: 20 px;
  border - style: solid;
  border - color: transparent transparent red transparent;
}

//数组随机排序
let arr = [1,2,3,4,5,6,7,8,9]
function sorts(arr) {
  for (let index = 0; index < arr.length; index++) {
    let rand = Math.floor(Math.random() * arr.length)
    var temp = arr[rand];
    arr[rand] = arr[index];
    arr[index] = temp;
  }
  return arr
}
console.log(sorts(arr))

//判断值类型，克隆
Object.prototype.clone = function () {
  var o = this.constructor === Array ? [] : {};
  for (var e in this) {
    o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
  }
  return o;
}

//方法二：
/**
   * 克隆一个对象
   * @param Obj
   * @returns
   */
function clone(Obj) {
  var buf;
  if (Obj instanceof Array) {
    buf = [];                    //创建一个空的数组 
    var i = Obj.length;
    while (i--) {
      buf[i] = clone(Obj[i]);
    }
    return buf;
  } else if (Obj instanceof Object) {
    buf = {};                   //创建一个空对象 
    for (var k in Obj) {           //为这个对象添加新的属性 
      buf[k] = clone(Obj[k]);
    }
    return buf;
  } else {                         //普通变量直接赋值
    return Obj;
```




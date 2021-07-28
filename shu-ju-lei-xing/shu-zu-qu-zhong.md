Es6用Array.from把数组转换成set数据结构

直接新建数组，双层循环

function sort\(arr\) {

 var result = {};

 var newArr = \[\];

 for \(var i = 0; i &lt; arr.length; i++\) {

 if \(!result\[arr\[i\]\]\) {

 newArr.push\(arr\[i\]\);

 result\[arr\[i\]\] = 1;

 }

 }

 return newArr;

}

\[1,2,3,1,'a',1,'a'\].filter\(function\(ele,index,array\){ return index===array.indexOf\(ele\)}\)


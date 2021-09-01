#### 字符匹配 {#-}

精确匹配就不说了，比如/hello/，也只能匹配字符串中的"hello"这个子串。  
正则表达式之所以强大，是因为其能实现模糊匹配。

##### 匹配多种数量 {#-}

用`{m,n}`来匹配多种数量，其他几种形式\(`+*?`\)都可以等价成这种。比如

```
var regex = /ab{2,5}c/g;
var string = 
"abc abbc abbbc abbbbc abbbbbc abbbbbbc"
;
console.log( string.match(regex) ); // ["abbc", "abbbc" , "abbbbc", "abbbbbc"]
```

贪婪和非贪婪:

默认贪婪

```
var regex = /\d{2,5}/g;
var string = "123 1234 12345 123456";
console.log( string.match(regex) ); // ["123", "1234", "12345", "12345"]
```

两次后面加一个 ？ 就可以表示非贪婪，非贪婪时

```
var regex = /\d{2,5}?/g;
var string = "123 1234 12345 123456";
console.log( string.match(regex) ); // ["12", "12", "34", "12", "34", "12", "34", "56"]
```

##### 匹配多种情况 {#-}

用字符组`[]`来匹配多种情况，其他几种形式\(`\d\D\s\S\w\W`\)都可以等价成这种。比如

```
var regex = /a[123]b/g;
var string = "a0b a1b a2b a3b a4b";
console.log( string.match(regex) ); // ["a1b", "a2b", "a3b"]
```

如果字符组里面字符特别多的话可以用`-`来表示范围，比如\[123456abcdefGHIJKLM\]，可以写成\[1-6a-fG-M\]，用\[^0-9\]表示非除了数字以外的字符  
多种情况还可以是多种分支，用管道符来连接`|`，比如

```
var regex = /good|goodbye/g;
var string = "goodbye";
console.log( string.match(regex) ); // ["good"]
```

这个例子可以看出分支结构也是惰性的，匹配到了就不再往后尝试了。


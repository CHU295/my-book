## 工厂模式

```js
function createPerson(name, age, job){     
 var o = new Object();     
 o.name = name;     
 o.age = age;     
 o.job = job;     
 o.sayName = function(){         
  alert(this.name);     
 };         
 return o; 
} 

var person1 = createPerson("Nicholas", 29, "Software Engineer"); 
var person2 = createPerson("Greg", 27, "Doctor");
```

## 构造函数模式

```js
function Person(name, age, job){    
 this.name = name;     
 this.age = age;     
 this.job = job;     
 this.sayName = function(){         
  alert(this.name);     
 };     
} 

var person1 = new Person("Nicholas", 29, "Software Engineer");
```




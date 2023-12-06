---
title: Js
---

## typeof 
作用：返回正在使用的值的基本类型

```js
// 基本类型/值类型/原始值/原始类型	
var null1 = null;
var undefined1 = undefined;
var string1 = 'foo';
var number1 = 1
var boolean1 = true;
var symbol1 = Symbol('foo');
console.log(typeof null1); // object, 需要注意
console.log(typeof undefined1); // undefined
console.log(typeof string1); // string
console.log(typeof number1); // number
console.log(typeof boolean1); // boolean
console.log(typeof symbol1); // symbol

// 引用类型/复杂值
var myString = new String('male');
var myNumber = new Number(23);
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function('x', 'y', 'return x * y');
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('error');

console.log(typeof myString); // 输出 object
console.log(typeof myNumber); // 输出 object
console.log(typeof myBoolean); // 输出 object
console.log(typeof myObject); // 输出 object
console.log(typeof myArray); // 输出 object
console.log(typeof myFunction); // 输出 function 需要注意
console.log(typeof myDate); // 输出 object
console.log(typeof myRegExp); // 输出 object
console.log(typeof myError); // 输出 object
```

>  typeof XXX 和typeof(xxxx)是一样的

#### 注意
1. null类型是object
2. new Function是function

## 关于string字符串

> 注意：在js里，字符串一旦被创建，他们的值就不能改变了，当你要改变一个变量保存的字符串时，先要销毁原来的字符串，然后在用另一个包含新值的字符串去填充该变量。

- 字符串有方法，但是不可以设置属性
  ```js
  const str='abc'
  str.a='a'
  console.log(str.a) //是undefined
  ```
- 另一种创建字符串的方法，但是使用typeof判断是object
  ```js
  const str=new String('abc') //或const str=new Object('abc')
  console.log(typeof str) //object
  ```
##### 原因
- 我们通过平常的形式创建好字符串后再去调用他的方法时有以下几个步骤：
    - 声明字符串 <code>const str='XXX'</code>
    - 访问它的属性（方法）<code>str.XXX()</code>
    - 以读模式访问str,这时会有以下几个步骤：
      - new String 方法返回一个实例
      - 调用实例上的方法
      - 销毁实例
      - 新的字符串填充
      - 所以真实的执行步骤是：
  ```js
    let str= new String('aaa')
    let str1=str.xxx()
    str=null
  ```
##### 为什么给字符串设置属性无效
- 在给str添加属性时，首先会创建一个实例，给这个实例设置一个属性
- 当str.xxx这行代码执行完时，这个实例会被销毁
- 所以当我们访问str时没有这个属性

##### 通过new String 创建的字符串实例其实是一个字符串对象，是一个引用类型。
当我们调用new String时创建一个string对象
```js
const str=new String('aaa')
console.log('str',str)  //{String{'aaa'}}
```
![Alt text](https://pic.chitchat.top/images/js_string.png)






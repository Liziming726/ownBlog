---
title: Learn Javascript Algorithms And Data Structures
date: 2022-10-07
tags: [文章分享]
cover: ""
top_img: false
categories: [文章分享]
---

>  React under candy this pircture is so beautiful
> ![11](https://blog.logrocket.com/wp-content/uploads/2020/01/complete-guide-react-refs.png)

## 使用递归代替循环

递归是函数调用自身的操作。 为了便于理解，有如下任务：计算数组内元素前 n 的元素乘积。 使用 for 循环， 可以这样做：

```js
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```

下面是递归写法，注意代码里的 multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]。 这意味着可以重写 multiply 以调用自身而无需依赖循环。

```js
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

递归版本的 multiply 详述如下。 在 base case 里，也就是 n <= 0 时，返回 1。 在 n 比 0 大的情况里，函数会调用自身，参数 n 的值为 n - 1。 函数以相同的方式持续调用 multiply，直到 n <= 0 为止。 所以，所有函数都可以返回，原始的 multiply 返回结果。

**注意：** 递归函数在没有函数调用时（在这个例子是，是当 n <= 0 时）必需有一个跳出结构，否则永远不会执行完毕。

写一个递归函数，sum(arr, n)，返回递归调用数组 arr 从前 n 个元素和。
- sum([1], 0) 应该返回 0 。
- sum([2, 3, 4], 1) 应该返回 2 。
- 通过:sum([2, 3, 4, 5], 3) 应该等于 9。
- 通过:代码不能包含任意形式的循环（for、while 或者高阶函数如：forEach、map、filter 以及 reduce）。

```js
function sum(arr, n) {
  // 只修改这一行下面的代码
  if(n <= 0){
    return 0;
  } else{
    return sum(arr,n-1) + arr[n -1];
  }
  // 只修改这一行上面的代码
}
```

--- 
## 编写带参数的箭头函数

> 使用箭头函数的语法重写 myConcat 函数，将 arr2 的内容添加到 arr1。

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

//ES6
const myConcat = (arr1,arr2) => {
  "use strict"
  return arr1.concat(arr2)
}
console.log(myConcat([1, 2], [3, 4, 5]));
```

All the code is study from [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)

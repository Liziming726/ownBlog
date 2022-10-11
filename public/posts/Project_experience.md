---
title: My First Project experience
date: 2022-10-10
tags: [文章分享]
cover: ""
top_img: false
categories: [文章分享]
---

>This is my first participation in the project development record.   I'll record some of the gains here

---

## 1. The environment

- Development environment
- Test environment
- production environment

Development environment -> Test environment -> Production environment

> ⌨ Development environment is the development environment of the project, which is used to develop the project. The configuration can be relatively arbitrary. For the convenience of development and debugging, all error reporting and testing tools are generally opened, Which is the most basic enviroment.

> 🛠 Test environment is the test environment of the project, which is used to test the project. The environment is clone a production configuration and an application doesn't work well in the test environment,you can't release it to the production server. It's a transition from development to production.

> 🎉 Production environment is the production environment of the project, which is used to develop the project.  The production environment is the most important environment that provides external services . Generally , the error report is disabled and the error log is enabled . The deployment branch is usually the master branch.

As you can see , the project is in production

## 2. About nodejs error reporting issues


`Error: PostCSS plugin remove-google-fonts requires PostCSS 8.`
![111](https://s1.imgbed.xyz/2022/10/11/AzxIN.jpg)

```js
The solution is to degrade the postcss-remove-google-fonts version to ^1.1.4
```
---
title: Node.js install course
date: 2023-02-17
tags: [文章分享]
cover: "https://imgbed.codingkelvin.fun/uPic/c9gF3x.png"
top_img: false
categories: [文章分享]
---

# Step:

1. 下载安装包
2. 安装程序
3. 查看
4. 环境变量配置

# 1.下载安装包

> 根据自己电脑系统及位数选择，我的电脑是Windows系统、64位、想下载稳定版的.msi（LTS为长期稳定版）这里选择`windows64位.msi`格式安装包。

nodejs官方网站：https://nodejs.org/zh-cn/download/   

版本建议使用稳定版本！！16.x.x即可

![image-20211205152143418](https://img-blog.csdnimg.cn/img_convert/8da41db4005cec8de0a2a955bd0fc22a.png)

使用群里分享的msi安装包也可以

# 2.安装程序

1. 下载完成后，双击安装包，开始安装，使用默认配置安装一直点`next`即可，安装路径默认在`C:\Program Files`下，也可以自定义修改

![image-20211205144124764](https://img-blog.csdnimg.cn/img_convert/62d44f7a4dac7ee97542fcfc51cf0b0d.png)

![image-20211205144140410](https://img-blog.csdnimg.cn/img_convert/99e932fe1ab8450c18b8119d1111b262.png)

2. 安装路径默认在C:\Program Files下面，也能够自定义修改，而后点击next（此处设置我的安装目录为`E:\KF\node.js\` 根据自己的需要进行更改。）

![image-20211205144242370](https://img-blog.csdnimg.cn/img_convert/16e468cb4386e6b63f3d9aa407b70d92.png)

3. 下图根据本身的需要进行，我选择了默认`Node.js runtime`，而后`Next`

- `Node.js runtime` ：表示运行环境
- `npm package manager`：表示npm包管理器
- `online documentation shortcuts` ：在线文档快捷方式
- `Add to PATH`：添加到环境变量

![image-20211205144308306](https://img-blog.csdnimg.cn/img_convert/fb86abfcf988aa072937381daca5a20d.png)

4. 以下图框中所示，不用选中，直接next

![image-20211205144522793](https://img-blog.csdnimg.cn/img_convert/b0bd4d8d7af30dc3fd6f54be819863ef.png)

5. 点击Install，进行安装

![image-20211205162322641](https://img-blog.csdnimg.cn/img_convert/a0d8e0f6a2c99119196c0a3146fc21d8.png)

6. 点击finish，完成安装

![image-20211205144615274](https://img-blog.csdnimg.cn/img_convert/ee489c76265e2586db650af007a62f45.png)

7. 安装完成后，.msi格式的安装包已经将[node](https://so.csdn.net/so/search?q=node&spm=1001.2101.3001.7020)启动程序添加到系统环境变量path中,咱们能够查看系统变量进行验证：在【个人电脑】右键→【属性】→【高级系统设置】

![image-20211205151040971](https://img-blog.csdnimg.cn/img_convert/711651d79af2a844d650ecc9ed89dcf7.png)

8. 点击【高级】→【环境变量】![image-20211205151118122](https://img-blog.csdnimg.cn/img_convert/960c062e19533460f7e0f0e78f42b913.png)

9. 在系统变量中查看【path】，点击【编辑】

![image-20211205151309756](https://img-blog.csdnimg.cn/img_convert/d6346e68a0564db3fe2b0ef4a3d54579.png)

10. 会发现.msi格式的安装包已经将node启动程序添加到系统环境变量path中

![image-20211205151333499](https://img-blog.csdnimg.cn/img_convert/68a5d1350bdb68e9be7cfec0cf8af516.png)

# 3.查看

1. 既然已经将node程序添加到全局系统变量中，把咱们能够直接在CMD窗口中任意位置执行node，打开CMD窗口，执行命令`node -v`查看node版本

> 【注意：此时是打开CMD窗口，并非在C:\Program Files\nodejs目录下执行node.exe】

![image-20211205151433530](https://img-blog.csdnimg.cn/img_convert/94c49c83eb003cde3bfa8f3de667f2f9.png)

2.  最新版的node在安装时同时也安装了npm,执行`npm -v`查看npm版本

![image-20211205151527701](https://img-blog.csdnimg.cn/img_convert/6545e4bae311044c7fae1e7c425b4927.png)

3. 默认状况下，咱们在执行npm install -g XXXX时，下载了一个全局包，这个包的默认存放路径C:\Users\Administrator\AppData\Roaming\npm\node_modules下，能够经过CMD指令`npm root -g`查看

![image-20211205151608070](https://img-blog.csdnimg.cn/img_convert/182bbdffdfd25cc96062e0dfdd05677e.png)

4. 一部分经常使用的命令，以下：

> npm -v：查看npm安装的版本。
> npm init：会引导你建立一个package.json文件，包括名称、版本、作者等信息。
> npm list：查看当前目录下已安装的node包。
> npm ls：查看当前目录下已安装的node包。
> npm install moduleNames：安装Node模块到本地目录node_modules下。
> npm install < name > -g：将包安装到全局环境中。
> npm install < name > --save：安装的同时，将信息写入package.json中，项目路径中若是有package.json文件时，直接使用npm install方法就能够根据dependencies配置安装全部的依赖包，这样代码提交到git时，就不用提交node_modules这个文件夹了。
> npm install < name> --save-dev：安装的同时，将信息写入package.json中项目路径中若是有package.json文件时，直接使用npm install方法就能够根据devDependencies配置安装全部的依赖包，这样代码提交到git时，就不用提交node_modules这个文件夹了。
> npm uninstall moudleName：卸载node模块。

# 4.环境配置 | 重要✔✔✔

1. 打开安装的目录（默认安装情况下在C:\Program Files\nodejs） 我的则在`E:\KF\node.js\`

2. 在安装目录下新建两个文件夹【node_global】和【node_cache】

![image-20211205152744552](https://img-blog.csdnimg.cn/img_convert/2c9d15d6697ff9435c4286f1db3ba317.png)

3. 再次打开cmd命令窗口，输入npm config set prefix “**你的路径**\node_global”（`“你的路径”默认安装的状况下为 C:\Program Files\nodejs`）

```js
npm config set prefix "E:\KF\nodejs\node_global"
```

4. npm config set cache “**你的路径**\node_cache” 可直接复制刚刚新建的空文件夹目录

```js
npm config set cache "E:\KF\nodejs\node_cache"
```

执行的时候建议使用管理员权限打开CMD，否则有可能会提示权限不够报错

![image-20211205153156873](https://img-blog.csdnimg.cn/img_convert/bc602a0d40b08eea712e8a5698ae5c29.png)

5. 设置环境变量，打开【系统属性】-【高级】-【环境变量】，在`系统变量`中新建

变量名：`NODE_PATH`

变量值：`C:\Program Files\nodejs\node_global\node_modules`

![image-20211205154153173](https://img-blog.csdnimg.cn/img_convert/da2f377e853c91281766b21b7197cd96.png)

6. 编辑`用户变量（环境变量）`的 path，将默认的 C 盘下 `APPData\Roaming\npm` 修改成 `C:\Program Files\nodejs\node_global`，点击确定

![image-20211205154422135](https://img-blog.csdnimg.cn/img_convert/861a7e29e225991764120b1af0632cf2.png)

最后别忘了在`Path`里面添加`NODE_PATH`

![image-20211205162518300](https://img-blog.csdnimg.cn/img_convert/84f4066dd5d76c8137e3d0417638ff86.png)

测试，配置完成后，安装个module测试下，咱们就安装最经常使用的express模块，打开cmd窗口，输入以下命令进行模块的全局安装：

```js
npm install yarn -g
```

设置淘宝npm镜像

```js
npm config set registry https://registry.npm.taobao.org
```



## 🎉🎉🎉恭喜！
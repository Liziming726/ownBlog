---
title: Learning Dynamic Routes / 学习动态路由
date: 2022-09-22
tags: [文章分享]
cover: ""
top_img: false
categories: [文章分享]
---

## 学到什么

- **如何使用 getStaticPaths**
- **如何编写getStaticProps以获取每个博客文章的数据。**
- **如何使用remark.**
- **如何漂亮地打印日期字符串**
- **如何链接到具有动态路由的页面**
- **关于动态路由的一些有用信息**

### 页面路径取决于外部数据
讨论每个**页面路径**都依赖于外部数据的情况。Next.js 允许您使用依赖于外部数据的路径静态生成页面。这会在 Next.js 中启用**动态 URL。**

>First, we’ll create a page called [id].js under pages/posts. Pages that begin with [ and end with ] are dynamic routes in Next.js.

>首先，我们将创建一个名为[id].jsunder的页面pages/posts。以开头[和结尾的页面]是Next.js中的动态路由。
---

### Let's look at the code about how to use getStaticPaths

```js
export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}

```

### Implement getStaticPaths / 实现getStaticPaths

打开`lib/posts.js`并添加此功能。这将返回目录中的文件名列表（不包括.md）`posts`：
```js
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }
```

**重要提示：** 返回的列表不仅仅是一个字符串数组——它 **必须**是一个看起来像上面注释的对象数组。每个对象都必须有params密钥并包含一个带有id密钥的对象（因为我们[id]在文件名中使用）。否则，getStaticPaths将失败。

在 pages/posts/[id].js 导入这个函数

```js
import { getAllPostIds } from '../../lib/posts'
```

并创建getStaticPaths调用此函数：

```js
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
```

- Ignore fallback: false for now — we’ll explain that later.
- 忽略fallback: false——稍后解释。

请再次打开lib/posts.js并添加此功能。这将基于以下内容返回帖子数据id
```js
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  }
}
```

并**创建getStaticProps**调用此函数：
```js
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
```
然后**更新Post要使用的组件postData：**
```js
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}
```

## 🚝 This far , We’ve successfully generated dynamic routes.
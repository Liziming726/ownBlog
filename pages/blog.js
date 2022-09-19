/*
 * @Author: Liziming726 873884635@qq.com
 * @Date: 2022-09-19 14:06:40
 * @LastEditors: Liziming726 873884635@qq.com
 * @LastEditTime: 2022-09-19 17:57:58
 * @FilePath: \liziming\pages\blog.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */
import Content from '../components/Blog/Content';
import Head from 'next/head';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import { getSortedPostData } from '../utils/postTools';

const blog = ({ posts }) => {
  return (
    <Wrapper>
      <Head>
        <title>Ziming&apos;s Blog</title>
      </Head>
      <Content posts={posts} />
      <Footer />
    </Wrapper>
  );
};

export default blog;

export const getStaticProps = async () => {
  const posts = await getSortedPostData();
  return {
    props: {
      posts,
    },
  };
};

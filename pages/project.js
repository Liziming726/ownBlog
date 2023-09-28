/*
 * @Author: Liziming726 873884635@qq.com
 * @Date: 2022-09-19 14:19:17
 * @LastEditors: Liziming726 873884635@qq.com
 * @LastEditTime: 2022-09-19 17:58:41
 * @FilePath: \liziming\pages\project.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Wrapper from '../components/Wrapper';
import styles from '../styles/Project.module.css';
import Item from '../components/Project/Item';
import Head from 'next/head';
import Footer from '../components/Footer';

const Project = () => {
  return (
    <Wrapper>
      <Head>
        <title>Ziming Projects</title>
      </Head>
      <div className={styles.container}>
        <p className={styles.title}>Projects</p>
        <div className={styles.list}>
        <Item
            name='Weather Now'
            description='A Weather website. visit https://www.weathernow.fun/'
            icon='&#xe64b;'
            repo='https://www.weathernow.fun/'
          />
          <Item
            name='Todo_List'
            description='A Todo List demo. visit https://www.musicli.live/'
            icon='&#xe64b;'
            repo='https://github.com/Liziming726/todolist-test'
          />
          <Item
            name='Next_React'
            description='A Using the next.js blog demo. Please refer to the official website nextjs.cn'
            icon='&#xe64b;'
            repo='https://github.com/Liziming726/nextjs-blog'
          />
          <Item
            name='bookstore'
            description='A Book Searching Website using Google Book API . This project study by KelvinQiu.'
            icon='&#xe61f;'
            repo='https://github.com/Liziming726/Bookstore'
          />
        </div>
        <p className={styles.title}>Demo</p>
        <div className={styles.list}>
          <Item
            name='drackwhite_Switching'
            description='A dark mode demo.'
            icon='&#xe65a;'
            repo='https://github.com/Liziming726/drackwhite_Switching'
          />
          <Item
            name='search_for_React'
            description='A search demo.'
            icon='&#xe66c;'
            repo='https://github.com/Lizsiming726/Search-for-React'
          />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Project;

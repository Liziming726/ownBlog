import styles from "../styles/Anything.module.css";
import Wrapper from "../components/Wrapper";
import Head from "next/head";
import Item from "../components/Anythings/item";

const Anything = () => {
  return (
    <>
      <Wrapper>
        <Head>
          <title>Ziming anything</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Anything</h1>
            <p className={styles.descriptions}>
              Anything want to share with you
            </p>
          </div>
        </div>
        <Item
          // 头像，名字，描述，时间，仓库，图片，宽度，高度
          avater="https://s1.imgbed.xyz/2023/04/05/jWK1u.md.jpg"
          name="哈哈"
          description="name my pet hehe"
          time="20230405"
          img="https://s1.imgbed.xyz/2023/04/05/jWlsK.md.jpg"
          width="300"
          height="300"
          shareUrl='https://s1.imgbed.xyz/2023/04/05/jWlsK.md.jpg'
        />
        <Item
          // 头像，名字，描述，时间，仓库，图片，宽度，高度
          avater="https://s1.imgbed.xyz/2023/04/05/jWiWq.md.jpg"
          name="你好"
          description="second share , this is hello"
          time="20230405"
          width="300"
          height="300"
        />
        <Item
          avater="https://s1.imgbed.xyz/2023/04/05/jWK1u.md.jpg"
          name="哈哈"
          description="Share for the first time, this is the account of haha"
          time="20230405"
          width="300"
          height="300"
        />
      </Wrapper>
    </>
  );
};
export default Anything;

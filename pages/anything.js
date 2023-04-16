import styles from "../styles/Anything.module.css";
import Wrapper from "../components/Wrapper";
import Head from "next/head";
import Item from "../components/Anythings/item";

// import { ReactCusdis } from "react-cusdis";
// import { Divider } from "@mui/material";

import Giscus from "@giscus/react";

import axios from "axios";

export async function getStaticProps() {
  const res = await axios.get(
    "https://tianqi.moji.com/api/getAqi/5375"
    // "https://restapi.amap.com/v3/airquality/aqilist?&key=f0f577c0b97d416f142fed74e8bbd3d7&zoom=13&bounds=117.049498,36.708476;117.196882,36.595943&citycode=370100&_=1681527643845"
  );
  const data = res.data;
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

const Anything = ({ data }) => {
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

        {data.hours && data.hours[22] && (
          <div key={data.hours[22]}>
            <p>
              历城区空气污染指数 {data.hours[22].time} : {data.hours[22].aqi}
            </p>
          </div>
        )}
        {data.tips && (
          <div>
            <p>tips:{data.tips}</p>
          </div>
        )}

        <Item
          // 头像，名字，描述，时间，仓库，图片，宽度，高度
          avater="https://s1.imgbed.xyz/2023/04/05/jWK1u.md.jpg"
          name="哈哈"
          description="name my pet hehe"
          time="20230405"
          img="https://s1.imgbed.xyz/2023/04/05/jWlsK.md.jpg"
          width="300"
          height="300"
          shareUrl="https://s1.imgbed.xyz/2023/04/05/jWlsK.md.jpg"
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
        {/* <Divider />
        <ReactCusdis
          attrs={{
            host: "https://cusdis.com",
            appId: "7cf99719-775b-4aab-89c6-0e981b8c6a83",
            pageId: "PAGE_ID",
            pageTitle: "PAGE_TITLE",
            pageUrl: "PAGE_URL",
          }}
        /> */}

        <Giscus
          id="comments"
          repo="Liziming726/ownBlog"
          repoId="R_kgDOIA4-uA"
          category="Announcements"
          categoryId="DIC_kwDOIA4-uM4CRgXS"
        />
      </Wrapper>
    </>
  );
};

export default Anything;

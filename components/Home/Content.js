/*
 * @Author: Liziming726 873884635@qq.com
 * @Date: 2022-09-19 13:42:18
 * @LastEditors: Liziming726 873884635@qq.com
 * @LastEditTime: 2022-09-19 19:00:27
 * @FilePath: \liziming\components\Home\Content.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import utilStyles from "../../styles/util.module.css";
import styls from "../../styles/Content.module.css";
import Divider from "../Divider";
import Link from "next/link";

const Content = () => {
  return (
    <div className={`${styls.content} ${utilStyles.plain}`}>
      <article>
        <p>
          🎉Hey, I&apos;m Li Ziming, a sophomore at Jinan , majoring in{" "}
          <span className={utilStyles.stress}>Computer related majors</span>.{" "}
        </p>
        <p>
          The current focus is on the{" "}
          <span className={utilStyles.stress}>front-end</span>, based on{" "}
          <span className={utilStyles.stress}>React</span> ecosystem.
        </p>
        {/* <p>
        My favorite singer is<span className={utilStyles.stress}> Chen li </span>, but
        Can not go to the concert at the moment 😢
        </p> */}
      </article>
      <Divider />
      <article>
        <p>
          I enjoy programming. Playing around with code, discovering new tech,
          and building fun and useful projects are my favorite. On the{" "}
          <a className={utilStyles.textLink}>projects</a> page, I will show you
          all of my projects with a{" "}
          <a
            href="https://github.com/Liziming726"
            className={utilStyles.textLink}
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>{" "}
          repository and an online demo.{" "}
        </p>
        <p>
          Some of my projects:{" "}
          <a
            href="https://weathernow.fun"
            className={utilStyles.textLink}
            rel="noreferrer"
            target="_blank"
          >
            [WeatherNow]
          </a>{" "}
          | [bookStore] | [Next_React] On my way ...
        </p>
      </article>
      <Divider />
      <article>
        <p>
          In my spare time, I like watching Bilibili . By accident share some
          opinions and experience. You can find me on{" "}
          <span className={utilStyles.stress}>哔哩哔哩</span> by searching
          你好h_h or clicking{" "}
          <a
            href="https://space.bilibili.com/500442786"
            rel="noreferrer"
            target="_blank"
            className={utilStyles.textLink}
          >
            this link
          </a>
          .
        </p>
      </article>
      <Divider />
      <article>
        <p>Persist in learning and enjoy learning . Happy everyday✨</p>
        <p>
          Find me on{" "}
          <a
            href="https://github.com/Liziming726"
            rel="noreferrer"
            target="_blank"
            className={utilStyles.textLink}
          >
            Github
          </a>{" "}
          and{" "}
          <a
            href="https://space.bilibili.com/500442786"
            rel="noreferrer"
            target="_blank"
            className={utilStyles.textLink}
          >
            哔哩哔哩
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default Content;

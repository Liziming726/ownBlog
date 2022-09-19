/*
 * @Author: Liziming726 873884635@qq.com
 * @Date: 2022-09-19 13:41:47
 * @LastEditors: Liziming726 873884635@qq.com
 * @LastEditTime: 2022-09-19 15:03:08
 * @FilePath: \liziming\components\Home\Avatar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from '../../styles/Avatar.module.css';
import React from 'react';
import Image from 'next/image';

const Avatar = () => {
  const [index, setIndex] = React.useState(0);
  const ref = React.useRef();
  const words = ['Li Ziming', 'Farrell'];

  setTimeout(() => {
    if (ref.current) {
      ref.current.classList.add(styles.out);
    }
  }, 2900);

  const handleEnd = () => {
    ref.current.classList.remove(styles.out);
    setIndex((prev) => (prev + 1 === words.length ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      <Image
        src='/avatar.jpg'
        width={85}
        height={85}
        priority
        className={styles.avatar}
      />
      <div className={styles.description}>
        <h1 className={styles.name} ref={ref} onTransitionEnd={handleEnd}>
          {words[index]}
        </h1>
        <p className={styles.tag}>Front-End Developer / Sophomore / Shandong</p>
      </div>
    </div>
  );
};

export default Avatar;

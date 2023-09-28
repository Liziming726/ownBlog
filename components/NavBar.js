/*
 * @Author: Liziming726 873884635@qq.com
 * @Date: 2022-09-19 13:45:35
 * @LastEditors: Liziming726 873884635@qq.com
 * @LastEditTime: 2022-09-19 15:38:46
 * @FilePath: \liziming\components\NavBar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import React from 'react';

const NavBar = ({ setMode, mode }) => {
  const handleClick = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light');
  };

  React.useEffect(() => {
    // toggle HTML theme
    if (mode === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [mode]);

  return (
    <div className={styles.container}>
      <Link href='/'>
        <a className={styles.signature}>Ziming</a>
      </Link>
      <nav className={styles.nav}>
        {/* Mobile Icon */}
        <Link href='/blog'>
          <span className={`iconfont ${styles.mobile} ${styles.icon}`}>
            &#xe634;
          </span>
        </Link>
        <Link href='/project'>
          <span className={`iconfont ${styles.mobile} ${styles.icon}`}>
            &#xe650;
          </span>
        </Link>

        {/* Laptop Link */}
        <Link href='/'>
          <a className={`${styles.link} ${styles.laptop}`}>Me</a>
        </Link>
        <Link href='/blog'>
          <a className={`${styles.link} ${styles.laptop}`}>Blog</a>
        </Link>
        <Link href='/project'>
          <a className={`${styles.link} ${styles.laptop}`}>Projects</a>
        </Link>

        {/* Other Icon */}
        <a
          href='https://github.com/Liziming726'
          rel='noreferrer'
          target='_blank'
          className={`iconfont ${styles.icon}`}
        >
          &#xe885;
        </a>
        <a
          href='https://space.bilibili.com/500442786'
          rel='noreferrer'
          target='_blank'
          className={`iconfont ${styles.icon}`}
        >
          &#xe66d;
        </a>
        <span className={`iconfont ${styles.icon}`} onClick={handleClick}>
          &#xe635;
        </span>
      </nav>
    </div>
  );
};

export default NavBar;

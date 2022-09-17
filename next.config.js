/*
 * @Author: Liziming726 873884635@qq.com
 * @Date: 2022-09-17 20:35:40
 * @LastEditors: Liziming726 873884635@qq.com
 * @LastEditTime: 2022-09-17 20:37:24
 * @FilePath: \liziming\next.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig

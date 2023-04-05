import styles from "../../styles/Anything.module.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import moment from "moment/moment";
import Image from "next/image";

const Item = ({ name, description, time, repo, img, avater, width, height }) => {
  return (
    <div className={`${styles.item} ${styles.card}`}>
      <a href={repo} rel="noreferrer" target="_blank">
        <Stack direction="row" spacinaaag={2}>
          <Avatar alt="你好" src={avater}/>
          <p className={styles.name}>{name}</p>
          <p className={styles.time}>{moment(time).format("YYYY-MM-DD")}</p>
        </Stack>
        <div className={styles.info}>
          <p className={styles.description}>{description}</p>
          {img && <Image className={styles.img} src={img} width={width} height={height} alt="图片" />}
        </div>
      </a>
    </div>
  );
};

export default Item;

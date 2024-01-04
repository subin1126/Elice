import React from 'react';
import styles from './guide.module.css';

//2. `guide.module.css` 모듈을 불러온 후 클래스를 jsx 컴포넌트 요소에 적용하세요.
const Guide = props => {
  return (
    <ul className={styles.asideBtns}>
      <li className={styles.asideBtn}>
        <img className={styles.homeImg} src="/images/home.png" alt="homeImg" />
        <span className={styles.imgName}>홈</span>
      </li>
      <li className={styles.asideBtn}>
        <img
          className={styles.compassImg}
          src="/images/compass.png"
          alt="compassImg"
        />
        <span className={styles.imgName}>탐색</span>
      </li>
      <li className={styles.asideBtn}>
        <img
          className={styles.subscribeImg}
          src="/images/subscribe.png"
          alt="subscribeImg"
        />
        <span className={styles.imgName}>구독</span>
      </li>
      <li className={styles.asideBtn}>
        <img
          className={styles.folderImg}
          src="/images/folder.png"
          alt="folderImg"
        />
        <span className={styles.imgName}>보관함</span>
      </li>
    </ul>
  );
};

export default Guide;

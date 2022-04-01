import React from 'react';
import styles from './fourth.module.scss';
import { Link } from 'react-router-dom';
import GoHome from 'components/GoHome';

const Fourth = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <GoHome />

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/4/1" className={styles.link}>
              1.Ціноутворення на основі змінних виробничих витрат
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/4/2" className={styles.link}>
              2.Ціноутворення на основі повної виробничої собівартості
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/4/3" className={styles.link}>
              3.Ціноутворення на основі загальних змінних витрат
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/4/4" className={styles.link}>
              4.Ціноутворення на основі повних витрат
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fourth;

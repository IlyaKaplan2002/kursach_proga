import React from 'react';
import styles from './home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/1" className={styles.link}>
            1.Розрахунок ціни нового товару на ринку
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/2" className={styles.link}>
            2.Розрахунок коефіцієнту еластичності попиту
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/3" className={styles.link}>
            3.Розрахунок коефіцієнту цінової еластичності
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/4" className={styles.link}>
            4.Встановлення ціни на одиницю продукції
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

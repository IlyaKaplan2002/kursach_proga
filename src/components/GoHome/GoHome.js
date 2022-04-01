import React from 'react';
import styles from './goHome.module.scss';
import { ReactComponent as GoBackIcon } from 'assets/icons/goBack.svg';
import { Link } from 'react-router-dom';

const GoHome = () => {
  return (
    <Link className={styles.link} to="/">
      <GoBackIcon />
    </Link>
  );
};

export default GoHome;

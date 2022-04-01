import React from 'react';
import styles from './goToTheFourth.module.scss';
import { ReactComponent as GoBackIcon } from 'assets/icons/goBack.svg';
import { Link } from 'react-router-dom';

const GoToTheFourth = () => {
  return (
    <Link className={styles.link} to="/4">
      <GoBackIcon />
    </Link>
  );
};

export default GoToTheFourth;

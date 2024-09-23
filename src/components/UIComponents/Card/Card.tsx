'use client';

import Image from 'next/image';

import styles from './Card.module.scss';

export const Card = () => {
  return (
    <div className={styles.card}>
      <Image className={styles.card__img} src="" />
      <div className={styles.card__wrapper}>
        <h2 className={styles.card__name}>Blank name</h2>
        <div>Status</div>
      </div>
      <div>Description</div>
    </div>
  );
};

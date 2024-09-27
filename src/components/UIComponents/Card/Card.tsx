'use client';

import Image from 'next/image';

import styles from './Card.module.scss';

interface CardProps {
  name: 'string';
  src: 'string';
  status: 'string';
  gender: 'string';
}

export const Card = ({ name, src, status, gender }: CardProps) => {
  return (
    <div className={styles.card}>
      <Image width={150} height={150} src={src} alt={name} />
      <div className={styles.card__wrapper}>
        <h2 className={styles.card__name}>{name}</h2>
        <div>{status}</div>
        <div>{gender}</div>
      </div>
    </div>
  );
};

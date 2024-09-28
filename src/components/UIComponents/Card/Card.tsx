'use client';

import Image from 'next/image';

import styles from './Card.module.scss';

interface CardProps {
  name: string;
  img: string;
}

export const Card = ({ name, img }: CardProps) => {
  return (
    <div className={styles.card}>
      <Image width={200} height={200} src={img} alt={name} />
      <p className={styles.card__name}>{name}</p>
    </div>
  );
};

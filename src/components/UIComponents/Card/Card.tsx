'use client';

import Image from 'next/image';

import styles from './Card.module.scss';
import Link from 'next/link';

interface CardProps {
  id: number;
  name: string;
  img: string;
}

export const Card = ({ id, name, img }: CardProps) => {
  return (
    <Link href={`/character/${id}`}>
      <div className={styles.card}>
        <Image width={200} height={200} src={img} alt={name} />
        <p className={styles.card__name}>{name}</p>
      </div>
    </Link>
  );
};

import Link from 'next/link';
import Image from 'next/image';

import { getCharacter } from '@/api/services/characters/getCharacter';

import styles from './CharacterPage.module.scss';

interface CharacterPageProps {
  params: { slug: string };
}
const CharacterPage = async ({ params }: CharacterPageProps) => {
  const char = await getCharacter(params.slug);

  const getStatusStyles = () => {
    switch (char.status) {
      case 'Alive':
        return styles.character__alive;
      case 'Dead':
        return styles.character__dead;
      case 'unknown':
        return styles.character__unknown;
    }
  };

  return (
    <div className={styles.character}>
      <Link className={styles.character__link} href="/characters">
        Back to all characters
      </Link>
      <div className={styles.character__card}>
        <Image width={200} height={200} src={char.image} alt={char.name} />
        <div className={styles.character__textWrapper}>
          <p className={styles.character__name}>{char.name}</p>
          <p className={styles.character__gender}>{char.gender}</p>
          <p className={getStatusStyles()}>{char.status}</p>
        </div>
      </div>
    </div>
  );
};
export default CharacterPage;

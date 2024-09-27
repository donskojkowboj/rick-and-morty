import Image from 'next/image';
import Link from 'next/link';

import { getAllCharacters } from '@/api/services/getAllCharacters';

import styles from './CharactersPage.module.scss';

const CharactersPage = async () => {
  const characters = await getAllCharacters();

  return (
    <div className={styles.characters}>
      <Link className={styles.characters__link} href={`/characters/1,183`}>
        Filter characters
      </Link>
      <div className={styles.characters__content}>
        {characters.results.map((char) => (
          <Link href={`/character/${char.id}`} key={char.id}>
            <div className={styles.characters__wrapper}>
              <Image
                width={200}
                height={200}
                src={char.image}
                alt={char.name}
              />
              <p className={styles.characters__name}>{char.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CharactersPage;

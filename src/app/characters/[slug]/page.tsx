import Image from 'next/image';
import Link from 'next/link';

import { getCharactersWithFilters } from '@/api/services/getCharactersWithFilters';
import { CharacterFilters } from '@/types/models/character/character';

import styles from '../CharactersPage.module.scss';

interface CharactersPageProps {
  params: { slug: string };
  searchParams?: CharacterFilters;
}
const CharactersFiltered = async ({
  params,
  searchParams,
}: CharactersPageProps) => {
  const characters = await getCharactersWithFilters(params.slug, searchParams);

  return (
    <div className={styles.characters}>
      <Link className={styles.characters__link} href="/characters">
        Back to all characters
      </Link>
      <div className={styles.characters__content}>
        {characters.map((char) => (
          <Link key={char.id} href={`/character/${char.id}`}>
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

export default CharactersFiltered;

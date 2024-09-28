import Link from 'next/link';

import { getCharactersWithFilters } from '@/api/services/getCharactersWithFilters';
import { CharacterFilters } from '@/types/models/character/character';

import styles from '../CharactersPage.module.scss';
import { Card } from '@/components/UIComponents/Card';

interface CharactersPageProps {
  params: { slug: string };
  searchParams?: CharacterFilters;
}
const CharactersFiltered = async ({ params, searchParams }: CharactersPageProps) => {
  const characters = await getCharactersWithFilters(params.slug, searchParams);

  return (
    <div className={styles.characters}>
      <Link className={styles.characters__link} href="/characters">
        Back to all characters
      </Link>
      <div className={styles.characters__content}>
        {characters.map((char) => (
          <Link key={char.id} href={`/character/${char.id}`}>
            <Card name={char.name} img={char.image} key={char.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharactersFiltered;

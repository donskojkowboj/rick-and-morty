import Link from 'next/link';

import { getCharactersWithFilters } from '@/api/services/getCharactersWithFilters';
import { CharacterFilters } from '@/types/models/character/character';
import { Card } from '@/components/UIComponents/Card';

import styles from '../CharactersPage.module.scss';

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
          <Card id={char.id} name={char.name} img={char.image} key={char.id} />
        ))}
      </div>
    </div>
  );
};

export default CharactersFiltered;

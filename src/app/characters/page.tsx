import Link from 'next/link';

import { getAllCharacters } from '@/api/services/characters/getAllCharacters';
import { Card } from '@/components/UIComponents/Card';
import { Paginator } from '@/components/UIComponents/Paginator';

import styles from './CharactersPage.module.scss';

interface SearchParams {
  page?: string;
}

interface CharactersPageProps {
  searchParams: SearchParams;
}

const CharactersPage = async ({ searchParams }: CharactersPageProps) => {
  const characters = await getAllCharacters(Number(searchParams.page));

  if (!searchParams.page) {
    searchParams.page = '1';
  }

  return (
    <div className={styles.characters}>
      <Link className={styles.characters__link} href={`/characters/1,183`}>
        Filter characters
      </Link>
      <div className={styles.characters__content}>
        {characters.results.map((char) => (
          <Card key={char.id} id={char.id} img={char.image} name={char.name} />
        ))}
      </div>

      <Paginator source={'/characters'} urlPage={Number(searchParams.page)} info={characters.info} />
    </div>
  );
};
export default CharactersPage;

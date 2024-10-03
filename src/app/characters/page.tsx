import Link from 'next/link';

import { Card } from '@/components/UIComponents/Card';
import { Paginator } from '@/components/UIComponents/Paginator';
import { getAllCharacters } from '@/api/services/characters/getAllCharacters';
import { SearchParams } from '@/types/search-params';

import styles from './CharactersPage.module.scss';

interface CharactersPageProps {
  searchParams: SearchParams;
}

const CharactersPage = async ({ searchParams }: CharactersPageProps) => {
  const characters = await getAllCharacters(Number(searchParams.page));

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

      <Paginator source={'/characters'} activePage={searchParams.page} info={characters.info} />
    </div>
  );
};
export default CharactersPage;

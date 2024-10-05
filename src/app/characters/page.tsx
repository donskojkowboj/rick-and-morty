import Link from 'next/link';

import { Card } from '@/components/UIComponents/Card';
import { Paginator } from '@/components/UIComponents/Paginator';
import { getAllCharacters } from '@/api/services/characters/getAllCharacters';
import { NextPageParams } from '@/types/next-page-params';

import styles from './CharactersPage.module.scss';

const CharactersPage = async ({ searchParams }: NextPageParams) => {
  const characters = await getAllCharacters(Number(searchParams?.page));

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

      <Paginator sourceUrl={'/characters'} activePage={searchParams?.page} pagesCount={characters.info.pages} />
    </div>
  );
};
export default CharactersPage;

import { Card } from '@/components/UIComponents/Card';
import { Filter } from '@/components/UIComponents/Filter';
import { Paginator } from '@/components/UIComponents/Paginator';
import { getAllCharacters } from '@/api/services/characters/getAllCharacters';
import { NextPageParams } from '@/types/next-page-params';
import { CharacterFilters } from '@/types/models/character/character';

import styles from './CharactersPage.module.scss';

interface CharactersPageProps extends NextPageParams {
  searchParams?: CharacterFilters;
}

const CharactersPage = async ({ searchParams }: CharactersPageProps) => {
  const characters = await getAllCharacters(searchParams);

  return (
    <div className={styles.characters}>
      <div className={styles.characters__filterWrapper}>
        <Filter />
      </div>
      {!characters?.results ? (
        <div className={styles.characters__notFound}>No characters found. Please change your filter settings</div>
      ) : (
        <>
          <div className={styles.characters__content}>
            {characters.results.map((char) => (
              <Card key={char.id} id={char.id} img={char.image} name={char.name} />
            ))}
          </div>

          <Paginator sourceUrl={'/characters'} pagesCount={characters.info.pages} searchParams={searchParams} />
        </>
      )}
    </div>
  );
};
export default CharactersPage;

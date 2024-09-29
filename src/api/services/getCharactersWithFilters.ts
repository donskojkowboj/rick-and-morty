import {
  CharacterFilters,
  Characters,
} from '@/types/models/character/character';
import { ApiEndpoints } from '@/api/config/config';
import { buildQueryString } from '@/api/helpers/buildQueryString';

export const getCharactersWithFilters = async (
  ids: string,
  params?: CharacterFilters,
): Promise<Characters> => {
  const query = buildQueryString(params);
  const stringifyIds = decodeURIComponent(ids);

  const data = await fetch(
    `${ApiEndpoints.characters}/${stringifyIds}?${query}`,
  );
  return await data.json();
};

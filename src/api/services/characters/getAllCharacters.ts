import { CharacterFilters, CharactersResponse } from '@/types/models/character/character';
import { ApiEndpoints } from '@/api/config/config';
import { buildQueryString } from '@/api/helpers/buildQueryString';

export const getAllCharacters = async (params: CharacterFilters | undefined): Promise<CharactersResponse> => {
  const queryString = buildQueryString(params);

  const data = await fetch(`${ApiEndpoints.characters}/?${queryString}`);
  return await data.json();
};

import { CharactersResponse } from '@/types/models/character/character';
import { ApiEndpoints } from '@/api/config/config';

export const getAllCharacters = async (): Promise<CharactersResponse> => {
  const data = await fetch(ApiEndpoints.characters);
  return await data.json();
};

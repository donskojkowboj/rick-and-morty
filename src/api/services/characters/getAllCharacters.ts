import { CharactersResponse } from '@/types/models/character/character';
import { ApiEndpoints } from '@/api/config/config';

export const getAllCharacters = async (page: number): Promise<CharactersResponse> => {
  const data = await fetch(`${ApiEndpoints.characters}/?page=${page}`);
  return await data.json();
};

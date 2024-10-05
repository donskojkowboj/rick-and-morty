import { CharacterResponse } from '@/types/models/character/character';
import { ApiEndpoints } from '@/api/config/config';

export const getCharacter = async (id: string): Promise<CharacterResponse> => {
  const data = await fetch(`${ApiEndpoints.characters}/${id}`);
  return await data.json();
};

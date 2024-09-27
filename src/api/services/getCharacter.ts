import { CharacterResponse } from '@/types/models/character/character';
import { Api_Endpoints } from '@/api/config/config';

export const getCharacter = async (id: string): Promise<CharacterResponse> => {
  const data = await fetch(`${Api_Endpoints.characters}/${id}`);
  return await data.json();
};

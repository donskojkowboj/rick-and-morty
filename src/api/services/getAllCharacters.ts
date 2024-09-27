import { CharactersResponse } from '@/types/models/character/character';
import { Api_Endpoints } from '@/api/config/config';

export const getAllCharacters = async (): Promise<CharactersResponse> => {
  const data = await fetch(Api_Endpoints.characters);
  return await data.json();
};

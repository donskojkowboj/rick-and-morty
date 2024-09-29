import { ApiLink } from '@/types/api-link';
import { ResponseInfo } from '@/types/response-info';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ApiLink;
  location: ApiLink;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type CharacterResponse = Character;
export type Characters = Character[];

export interface CharactersResponse {
  info: ResponseInfo;
  results: Character[];
}

export interface CharacterFilters {
  name?: string;
  status?: CharacterStatus;
  species?: string;
  type?: string;
  gender?: CharacterGender;
}

export type CharacterStatus = 'Alive' | 'Dead' | 'Unknown';
export type CharacterGender = 'Male' | 'Female' | 'Genderless' | 'Unknown';

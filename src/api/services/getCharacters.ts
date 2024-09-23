import { instance } from '@/api/config/config';

export const getCharacters = (params?: string | number) => {
  return instance.get('/character', { params });
};

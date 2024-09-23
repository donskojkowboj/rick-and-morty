import { instance } from '@/api/config/config';

export const getEpisodes = (params?: string | number) => {
  return instance.get('/episode', { params });
};

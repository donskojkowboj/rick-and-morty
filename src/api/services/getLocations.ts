import { instance } from '@/api/config/config';

export const getLocations = (params?: string | number) => {
  return instance.get('/location', { params });
};

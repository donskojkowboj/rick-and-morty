import { ApiEndpoints } from '@/api/config/config';

export const getAllEpisodes = async () => {
  const data = await fetch(ApiEndpoints.episodes);
  return await data.json();
};

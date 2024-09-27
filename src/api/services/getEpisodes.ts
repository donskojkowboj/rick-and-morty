import { Api_Endpoints } from '@/api/config/config';

export const getAllEpisodes = async () => {
  const data = await fetch(Api_Endpoints.episodes);
  return await data.json();
};

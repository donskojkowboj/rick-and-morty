import { Api_Endpoints } from '@/api/config/config';

export const getAllLocations = async () => {
  const data = await fetch(Api_Endpoints.locations);
  return await data.json();
};

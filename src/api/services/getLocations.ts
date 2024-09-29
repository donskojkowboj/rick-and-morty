import { ApiEndpoints } from '@/api/config/config';

export const getAllLocations = async () => {
  const data = await fetch(ApiEndpoints.locations);
  return await data.json();
};

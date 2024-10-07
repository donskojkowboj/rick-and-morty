import { CharactersResponse } from '@/types/models/character/character';
import { ApiEndpoints } from '@/api/config/config';

interface getAllCharactersProps {
  page?: number;
  name?: string;
  status?: string;
  gender?: string;
}

export const getAllCharacters = async ({
  page,
  name,
  status,
  gender,
}: getAllCharactersProps): Promise<CharactersResponse> => {
  const createQueryString = () => {
    const params = new URLSearchParams();
    if (page) params.append('page', page.toString());
    if (name) params.append('name', name);
    if (status) params.append('status', status);
    if (gender) params.append('gender', gender);

    return params.toString() ? `?${params.toString()}` : '';
  };

  const data = await fetch(`${ApiEndpoints.characters}/${createQueryString()}`);
  return await data.json();
};

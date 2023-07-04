import { useQuery } from '@tanstack/react-query';
import { PROXY } from '@/constants/proxyURL';

interface Hobby {
  name: string;
  id: number;
  image: string;
}

const fetchData = async (id: string) => {
  const response = await fetch(`${PROXY}/api/v1/hobbies/recommend/${id}`);
  const categoryList = await response?.json();
  return categoryList;
};

const useHobbyData = (id: string) => {
  const { isLoading, data } = useQuery<Hobby[]>(
    ['datas', id],
    () => fetchData(id),
    {
      refetchOnWindowFocus: false,
    }
  );

  return { isLoading, data };
};

export default useHobbyData;

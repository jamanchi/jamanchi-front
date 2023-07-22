import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { LIST_SIZE } from '../constants';
import { PROXY } from '@/constants/proxyURL';

const fetchHobbies = async (pageParam: string) => {
  const { data } = await axios(
    `${PROXY}/api/v1/hobbies/sub?page=${pageParam}&size=${LIST_SIZE}`
  );

  return data;
};

const useFetchHobbies = () =>
  useInfiniteQuery({
    queryKey: ['hobbies'],
    queryFn: ({ pageParam = 1 }) => fetchHobbies(pageParam),
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

export default useFetchHobbies;

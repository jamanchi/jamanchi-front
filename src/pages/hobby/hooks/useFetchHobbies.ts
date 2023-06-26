import { useInfiniteQuery } from '@tanstack/react-query';
import { LIST_SIZE } from '../constants';
import { PROXY } from '@/constants/proxyURL';

const fetchHobbies = async (pageParam: string) =>
  await (
    await fetch(
      `${PROXY}/api/v1/hobbies/sub?page=${pageParam}&size=${LIST_SIZE}`
    )
  ).json();

const useFetchHobbies = () =>
  useInfiniteQuery({
    queryKey: ['hobbies'],
    queryFn: ({ pageParam = 1 }) => fetchHobbies(pageParam),
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

export default useFetchHobbies;

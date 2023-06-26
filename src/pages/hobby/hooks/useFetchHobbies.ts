import { useInfiniteQuery } from '@tanstack/react-query';
import { LIST_SIZE } from '../constants';

const fetchHobbies = async (pageParam: string) =>
  await (
    await fetch(`/api/v1/hobbies/sub?page=${pageParam}&size=${LIST_SIZE}`)
  ).json();

const useFetchHobbies = () =>
  useInfiniteQuery({
    queryKey: ['hobbies'],
    queryFn: ({ pageParam = 1 }) => fetchHobbies(pageParam),
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

export default useFetchHobbies;

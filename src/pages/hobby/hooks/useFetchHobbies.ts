import { useInfiniteQuery } from '@tanstack/react-query';

const fetchHobbies = async () =>
  await (await fetch(`/api/v1/hobbies/sub`)).json();

const useFetchHobbies = () =>
  useInfiniteQuery({
    queryKey: ['hobbies'],
    queryFn: fetchHobbies,
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

export default useFetchHobbies;

import { useQueries } from '@tanstack/react-query';
import { PROXY } from '@/constants/proxyURL';

const getResult = async (hobbyId: string, keywords: string[]) => {
  const data = await (
    await fetch(
      `${PROXY}/api/v1/answer?hobbyId=${hobbyId}&keywordId1=${keywords[0]}&keywordId2=${keywords[1]}`
    )
  ).json();

  return data;
};
const getImage = async (hobbyId: string) => {
  const data = await (await fetch(`${PROXY}/api/v1/hobbies/${hobbyId}`)).json();

  return data;
};

const useResultData = (hobbyId: string, keywords: string[]) => {
  const res = useQueries({
    queries: [
      {
        queryKey: ['resultData'],
        queryFn: () => getResult(hobbyId, keywords),
      },
      {
        queryKey: ['imageData'],
        queryFn: () => getImage(hobbyId),
      },
    ],
  });

  return [res[0].data, res[1].data];
};

export default useResultData;

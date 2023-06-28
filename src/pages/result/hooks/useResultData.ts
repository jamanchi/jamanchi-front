import { useQueries } from '@tanstack/react-query';
import { PROXY } from '@/constants/proxyURL';

interface IResult {
  title: string;
  image: string;
  result: IResultItem[];
}

interface IResultItem {
  keyword: string;
  description: string;
}
interface IHobbyData extends IResultItem {
  image: string;
}

const getResult = async (
  hobbyId: string,
  keywords: string[]
): Promise<IResult> => {
  const data = await (
    await fetch(
      `${PROXY}/api/v1/answer?hobbyId=${hobbyId}&keywordId1=${keywords[0]}&keywordId2=${keywords[1]}`
    )
  ).json();

  return data;
};
const getImage = async (hobbyId: string): Promise<IHobbyData> => {
  const data = await (await fetch(`${PROXY}/api/v1/hobbies/${hobbyId}`)).json();

  return data;
};

const useResultData = (hobbyId: string, keywords: string[]) => {
  const res = useQueries({
    queries: [
      {
        queryKey: ['resultData', hobbyId],
        queryFn: () => getResult(hobbyId, keywords),
      },
      {
        queryKey: ['imageData', hobbyId],
        queryFn: () => getImage(hobbyId),
      },
    ],
  });

  return {
    resultData: res[0].data,
    hobby: res[1].data,
  };
};

export default useResultData;

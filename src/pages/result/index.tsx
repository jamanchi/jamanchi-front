import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { colors } from '@/style/variables';
import ResultCard from './components/ResultCard';
import { shareLink } from '@/utils/shareLink';
import Button from '@/components/button';
import { pageContainer } from '@/style/mixin';
import useQueryString from '@/hooks/useQueryString';
import { shadow } from '@/style/variables/color';

export interface IResult {
  title: string;
  image: string;
  result: IResultItem[];
}

interface IResultItem {
  keyword: string;
  description: string;
}

const Result = () => {
  const { getParams } = useQueryString();
  const navigate = useNavigate();
  const previousBtn = () => navigate(-1);
  const getResult = async (hobbyId: string, keywords: string[]) => {
    const data = await (
      await fetch(
        `/api/v1/answer?hobbyId=${hobbyId}&keywordId1=${keywords[0]}&keywordId2=${keywords[1]}`
      )
    ).json();

    return data;
  };
  const hobbyId = getParams('id') || '';
  const keywords = getParams('keywords')?.split(',') || [];
  const { data: resultData } = useQuery<IResult>(['resultData'], () =>
    getResult(hobbyId, keywords)
  );

  return (
    <Wrapper>
      <Navigation leftOnClick={previousBtn} />
      <Title>{resultData?.title}</Title>
      <Image src={resultData?.image} alt={`${resultData?.title} 이미지`} />
      {resultData && <ResultCard resultData={resultData} />}
      <ButtonWrapper>
        <ShareButton
          color="secondary"
          fontColor="black"
          id="btnKakao"
          onClick={shareLink}
        >
          공유하기
        </ShareButton>
        <HobbyCheckButton
          onClick={() =>
            navigate('/similarHobbies', { state: resultData?.title })
          }
        >
          비슷한 취미 확인하기
        </HobbyCheckButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${pageContainer}

  box-shadow: ${shadow.box};
  border-radius: 20px;
  padding-top: 10px;
`;

const Title = styled.span`
  font-weight: bold;
  color: ${colors.primary};
  font-size: 2rem;
  padding: 10px;
  margin-top: 21px;
  margin-left: 40px;
`;

const Image = styled.img`
  display: block;
  background-color: ${colors.gray};
  max-width: 272px;
  height: 209px;
  border-radius: 20px;
  margin: 20px auto;
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShareButton = styled(Button)`
  margin-top: 44px;
`;

const HobbyCheckButton = styled(Button)`
  margin-top: 15px;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Result;

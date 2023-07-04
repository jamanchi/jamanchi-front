import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { colors } from '@/style/variables';
import { shareLink } from '@/utils/shareLink';
import Button from '@/components/button';
import { pageContainer } from '@/style/mixin';
import useQueryString from '@/hooks/useQueryString';
import { shadow } from '@/style/variables/color';
import jamanchi from '@/assets/images/jamanchi.png';
import useResultData from './hooks/useResultData';
import CardSlider from '@/components/CardSlider';

const Result = () => {
  const { getParams } = useQueryString();
  const hobbyId = getParams('id') || '';
  const keywords = getParams('keywords')?.split(',') || [];
  const { resultData, hobby } = useResultData(hobbyId, keywords);
  const navigate = useNavigate();
  const previousBtn = () => navigate(-1);

  return (
    <Wrapper>
      <Navigation leftOnClick={previousBtn} />
      <Title>{resultData?.title}</Title>
      <Image
        src={hobby?.image ?? jamanchi}
        alt={`${resultData?.title} 이미지`}
      />
      {resultData && (
        <CardSlider>
          {resultData.result.map(({ keyword, description }) => (
            <>
              <CardTitle>{keyword}</CardTitle>
              <CardBody>{description}</CardBody>
            </>
          ))}
        </CardSlider>
      )}
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
  overflow: hidden scroll;
  box-shadow: ${shadow.box};
  border-radius: 20px;
  padding-top: 10px;
  &::-webkit-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: none;
  }
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
  width: 272px;
  height: 209px;
  border-radius: 20px;
  margin: 20px auto;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  color: ${colors.primary};
  font-weight: bold;
  margin-bottom: 24px;
`;

const CardBody = styled.div`
  margin-bottom: 24px;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 29px;
  margin-bottom: 44px;
`;

const ShareButton = styled(Button)`
  margin-top: 15px;
`;

const HobbyCheckButton = styled(Button)`
  display: none;
  margin-top: 15px;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Result;

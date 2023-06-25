import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Navigation from '@/components/Navigation';
import { pageContainer } from '@/style/mixin';
import { colors } from '@/style/variables';
import Card from '@/components/Card';
import snowBoard from '@/assets/images/snowBoard.jpg';

const SimilarHobbies = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const previousBtn = () => navigate(-1);
  const data = [
    {
      title: '스노우보드',
      image: snowBoard,
    },
    {
      title: '스노우보드',
      image: snowBoard,
    },
    {
      title: '스노우보드',
      image: snowBoard,
    },
    {
      title: '스노우보드',
      image: snowBoard,
    },
    {
      title: '스노우보드',
      image: snowBoard,
    },
  ];

  return (
    <Wrapper>
      <Navigation leftOnClick={previousBtn} />
      <Title>{state}와 비슷한 취미</Title>
      <HobbyWrapper>
        {data.map((item, i) => (
          <SimilarHobby key={i}>
            <Description>
              <HobbyTitle>{item.title}</HobbyTitle>
              <DescriptionBody>확인하기 </DescriptionBody>
            </Description>
            <Image src={item.image} alt={item.title} />
          </SimilarHobby>
        ))}
      </HobbyWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${pageContainer}
  align-items: center;
`;

const Title = styled.span`
  font-weight: bold;
  color: ${colors.primary};
  font-size: 2rem;
  padding: 10px;
  margin-top: 32px;
  border-bottom: 3px solid ${colors.primary};
`;

const HobbyWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 0px 28px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;
`;

const SimilarHobby = styled(Card)`
  width: 100%;
  min-height: 100px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
`;

const HobbyTitle = styled.strong`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Image = styled.img`
  display: block;
  width: 100px;
  height: 100px;
`;
const DescriptionBody = styled.p`
  font-size: 0.8rem;
  cursor: pointer;
  &::after {
    content: '->';
  }
`;

export default SimilarHobbies;

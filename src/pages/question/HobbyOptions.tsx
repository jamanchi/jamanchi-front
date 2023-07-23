import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { MouseEvent } from 'react';
import Navigation from '@/components/Navigation';
import { colors, shadow } from '../../style/variables/color/index';
import { LODING, HOBBYOPTIONS_CHOICE } from './constants/index';
import { pageContainer } from '@/style/mixin';
import { PROXY } from '@/constants/proxyURL';

interface Hobby {
  name: string;
  id: number;
  image: string;
}

const HobbyOptions = () => {
  const navigate = useNavigate();
  const previousBtn = () => navigate(-1);
  const { id } = useParams();

  const fetchData = async () => {
    const { data: categoryList } = await axios(
      `${PROXY}/api/v1/hobbies/recommend/${id}`
    );
    return categoryList;
  };

  const { isLoading, data } = useQuery<Hobby[]>(['datas', id], fetchData, {
    refetchOnWindowFocus: false,
  });

  const nextPage = (_: MouseEvent<HTMLElement>, hobbyId: number) => {
    navigate(`/question/step3/${hobbyId}`);
  };

  return (
    <Wrapper>
      <Navigation leftOnClick={previousBtn} />
      <Title>{`${data?.length}개의 취미가 추천되었습니다`}</Title>
      <SubTitle>{HOBBYOPTIONS_CHOICE}</SubTitle>
      {isLoading ? (
        <span>{LODING}</span>
      ) : (
        <Grid>
          {data?.map((object: Hobby, index: number) => (
            <HobbyBox
              role="button"
              key={index}
              onClick={(_) => nextPage(_, object.id)}
            >
              {object.name}
            </HobbyBox>
          ))}
        </Grid>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${pageContainer};
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: ${shadow.box};
  padding-top: 10px;
  border-radius: 20px;
  box-sizing: border-box;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 30px;
  color: ${colors.primary};
`;

const SubTitle = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const Grid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
`;

const HobbyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  height: 50px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
    color: white;
  }
`;

export default HobbyOptions;

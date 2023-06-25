import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/Navigation';
import { colors } from '../../style/variables/color/index';
import { LODING, HOBBYOPTIONS_CHOICE } from './constants/index';

interface Hobbies {
  hobbies: Hobby[];
}

interface Hobby {
  hobby: string;
  id: number;
}

const HobbyOptions = () => {
  const navigate = useNavigate();
  const previousBtn = () => navigate(-1);
  const { id } = useParams();

  const fetchData = async () => {
    const response = await fetch(`/api/v1/questionResult/${id}`);
    const categoryList = await response?.json();
    return categoryList;
  };

  const { isLoading, isError, data, error } = useQuery<Hobbies>(
    ['datas', id],
    fetchData,
    {
      refetchOnWindowFocus: false,
    }
  );

  const nextPage = (_, hobbyId: number) => {
    navigate(`/question/step3/${hobbyId}`);
  };

  if (isError) {
    throw error;
  }

  return (
    <>
      <Navigation leftOnClick={previousBtn} />
      <Wrapper>
        <Title>{`${data?.hobbies.length}개의 취미가 추천되었습니다`}</Title>
        <SubTitle>{HOBBYOPTIONS_CHOICE}</SubTitle>
        {isLoading ? (
          <span>{LODING}</span>
        ) : (
          <Grid>
            {data?.hobbies?.map((object: Hobby, index: number) => (
              <HobbyBox key={index} onClick={(_) => nextPage(_, object.id)}>
                {object.hobby}
              </HobbyBox>
            ))}
          </Grid>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
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

  &:hover {
    background-color: ${colors.primary};
    color: white;
  }
`;

export default HobbyOptions;

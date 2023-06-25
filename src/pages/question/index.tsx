import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/Navigation';
import { colors } from '../../style/variables/color/index';
import { MAIN_CATEGORY_TITLE } from './constants';

type Datas = Data[];

interface Data {
  id: number;
  name: string;
  iconSrc: string;
}

const Question = () => {
  const fetchData = async () => {
    const response = await fetch(`/api/v1/hobbies/main`);
    const categoryList = await response?.json();
    return categoryList;
  };

  const { isLoading, isError, data, error } = useQuery<Datas>(
    ['datas'],
    fetchData,
    {
      refetchOnWindowFocus: false,
    }
  );

  const navigate = useNavigate();

  if (isError) {
    throw error;
  }

  return (
    <>
      <Navigation />
      <Wrapper>
        <Title>
          <span>{MAIN_CATEGORY_TITLE.FIRST}</span>
          <span>{MAIN_CATEGORY_TITLE.SECOND}</span>
        </Title>
        {isLoading ? (
          <span>로딩중</span>
        ) : (
          <Grid>
            {data?.map((data: Data) => (
              <Category
                key={data.id}
                onClick={
                  data.id === 0 ? () => navigate(`step1/${data.id}`) : undefined
                }
              >
                <img
                  width="40"
                  height="43"
                  src={`${data.iconSrc}`}
                  alt={`${data.id}`}
                />
                <span>{data.name}</span>
              </Category>
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
  box-sizing: border-box;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  & span {
    padding-top: 5px;
  }
  &:hover {
    background-color: ${colors.primary};
    color: white;
  }
`;

const Title = styled.div`
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 30px;
`;

export default Question;

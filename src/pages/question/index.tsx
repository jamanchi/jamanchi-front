import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Navigation from '@/components/Navigation';
import { colors, shadow } from '../../style/variables/color/index';
import { MAIN_CATEGORY_DATA, MAIN_CATEGORY_TITLE } from './constants';
import { pageContainer } from '@/style/mixin';

interface Data {
  id: number;
  name: string;
  iconSrc: string;
}

const Question = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Navigation
        leftOnClick={() => {
          navigate('/');
        }}
      />
      <Title>
        <span>{MAIN_CATEGORY_TITLE.FIRST}</span>
        <span>{MAIN_CATEGORY_TITLE.SECOND}</span>
      </Title>

      <Grid>
        {MAIN_CATEGORY_DATA?.map((data: Data) => (
          <Category
            key={data.id}
            style={{ cursor: data.id === 1 ? 'pointer' : '' }}
            onClick={
              data.id === 1 ? () => navigate(`step1/${data.id}`) : undefined
            }
          >
            <img
              width="49"
              height="49"
              src={`${data.iconSrc}`}
              alt={`${data.id}`}
            />
            <span>{data.name}</span>
          </Category>
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${pageContainer};
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  box-shadow: ${shadow.box};
  box-sizing: border-box;
  border-radius: 20px;
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
  margin-top: 15px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
  font-size: 30px;
`;

export default Question;

import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { colors } from '@/style/variables';

const keywordsSet = new Set();

const Keywords = () => {
  const navigate = useNavigate();
  const previousBtn = () => navigate(-1);
  const { id } = useParams();

  const [selectedKeywords, setSelectedKeywords] = useState();

  const run = (_, keyword: string) => {
    if (keywordsSet.has(keyword)) {
      keywordsSet.delete(keyword);
      setSelectedKeywords(new Set(keywordsSet));
      return;
    }
    if (keywordsSet.size === 2) return;
    keywordsSet.add(keyword);
    setSelectedKeywords(new Set(keywordsSet));
  };

  const handleResultBtn = () => {
    if (keywordsSet.size === 0) return;
    if (keywordsSet.size === 2) {
      const [first, second] = [...selectedKeywords];

      const goToPosts = () =>
        navigate({
          pathname: '/result',
          search: `?id=${id}&keywords=${first.replace(
            /\s/g,
            ''
          )},${second.replace(/\s/g, '')}`,
        });
      goToPosts();
    }
  };

  const keywords = [
    '간단 설명',
    '필수 물품',
    '비슷한 취미',
    '액세서리 및 부속품',
    '서적과 자료',
    '특정 브랜드와 제품',
    '기술과 기법',
    '유명 선수',
  ];

  return (
    <>
      <Navigation leftOnClick={previousBtn} />
      <Wrapper>
        <Title>원하는 키워드를 골라주세요</Title>

        <Grid>
          {keywords?.map((keyword, index) => (
            <KeywordBox
              key={index}
              style={{
                backgroundColor: keywordsSet.has(keyword) ? colors.primary : '',
                color: keywordsSet.has(keyword) ? colors.secondary : '',
                fontWeight: keywordsSet.has(keyword) ? '700' : '400',
              }}
              onClick={(_) => run(_, keyword)}
            >
              {keyword}
            </KeywordBox>
          ))}
        </Grid>
        <Limit>
          <span>최대 2개까지 선택가능</span>
        </Limit>
        <ResultBtn onClick={handleResultBtn}>결과 보기</ResultBtn>
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

const Limit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    background-color: ${colors.secondary};
    color: ${colors.primary};
    font-weight: 600;
    padding: 3px 17px 3px 17px;
    border-radius: 10px;
  }

  padding-top: 70px;
`;

const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const KeywordBox = styled.div`
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

const ResultBtn = styled.div`
  position: relative;
  bottom: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100%;
  height: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  background-color: ${colors.primary};
  color: white;
  font-weight: 600;

  &:hover {
    background-color: ${colors.secondary};
    color: black;
  }
`;

export default Keywords;

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/button';
import backgroundImage from '@/assets/images/backgroundImage.png';
import { colors } from '@/style/variables';
import {
  HOBBY_LIST_BUTTON_TEXT,
  NEW_HOBBY_BUTTON_TEXT,
  SUB_TITLE_TEXT,
} from '@/pages/main/constants';
import { pageContainer, font } from '@/style/mixin';

const Main = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Title>
          <TitleEffect>자</TitleEffect>연스럽게
          <br />
          <TitleEffect>만</TitleEffect>나는
          <br />
          <TitleEffect>취</TitleEffect>미 생활
        </Title>
        <SubTitle>{SUB_TITLE_TEXT}</SubTitle>
      </div>
      <ButtonGroup>
        <Button type="button" onClick={() => navigate('question')}>
          {NEW_HOBBY_BUTTON_TEXT}
        </Button>
        <Button
          type="button"
          color="secondary"
          fontColor="black"
          onClick={() => navigate('hobby')}
        >
          {HOBBY_LIST_BUTTON_TEXT}
        </Button>
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  ${pageContainer};
  justify-content: space-between;
  padding: 70px 30px 55px;
  background-image: url(${backgroundImage});
  border: 1px solid ${colors.gray};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.p`
  ${font.title}
`;

const SubTitle = styled.p`
  ${font.subTitle}
  color: ${colors.gray};
`;

const TitleEffect = styled.span`
  color: ${colors.primary};
`;

export default Main;

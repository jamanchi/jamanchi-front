import styled from '@emotion/styled';
import backgroundImage from '@/assets/images/backgroundImage.png';
import { colors, font } from '@/style/variables';
import Button from '@/components/Button/Button';
import {
  HOBBY_LIST_BUTTON_TEXT,
  NEW_HOBBY_BUTTON_TEXT,
  SUB_TITLE_TEXT,
} from '@/pages/main/constants';

const Main = () => (
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
      <Button type="button">{NEW_HOBBY_BUTTON_TEXT}</Button>
      <Button type="button" color="secondary" fontColor="black">
        {HOBBY_LIST_BUTTON_TEXT}
      </Button>
    </ButtonGroup>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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

import styled from '@emotion/styled';
import Card from './Card';
import { colors } from '@/style/variables';
import Button from './button';

interface IProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: IProps) => (
  <Wrapper>
    <ErrorCard>
      <Description>에러가 발생하였습니다.</Description>
      <pre style={{ color: 'red' }}>에러명 : {error.message}</pre>
      <Button type="button" onClick={resetErrorBoundary}>
        재시도
      </Button>
    </ErrorCard>
  </Wrapper>
);
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorCard = styled(Card)`
  padding: 20px;
`;
const Description = styled.strong`
  font-weight: bold;
  color: ${colors.primary};
`;

export default ErrorFallback;

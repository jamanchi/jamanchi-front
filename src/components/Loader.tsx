import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@/style/variables';

const Loader = () => (
  <Wrapper data-testid="loader">
    <LoaderBody>
      <Shadow />
      <Box />
    </LoaderBody>
    <LoaderBody>
      <Shadow />
      <Box />
    </LoaderBody>
  </Wrapper>
);

const animate = keyframes`
  17% { border-bottom-right-radius: 3px; }

  25% { transform: translateY(9px) rotate(22.5deg); }

  50% {
    transform: translateY(18px) scale(1,.9) rotate(45deg) ;
    border-bottom-right-radius: 40px;
  }
  
  75% { transform: translateY(9px) rotate(67.5deg); }

  100% { transform: translateY(0) rotate(90deg); }
  `;

const shadow = keyframes`
  50% {
    transform: scale(1.2,1);
  }
  `;

const LoaderBody = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  background: ${colors.primary};
  animation: ${animate} 0.5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
  z-index: 90;
`;

const Shadow = styled.div`
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: ${shadow} 0.5s linear infinite;
`;

const Wrapper = styled.div`
  height: 100%;
  background: #fff;
  overflow: hidden;
`;
export default Loader;

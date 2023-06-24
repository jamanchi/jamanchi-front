import { Global } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { layout } from './style/variables';
import reset from './style/reset';

const App = () => (
  <Wrapper>
    <Global styles={reset} />
    <Outlet />
  </Wrapper>
);

const Wrapper = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: ${layout.width};
  height: ${layout.height};
`;

export default App;

import { Global } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { layoutContainer } from '@/style/mixin';
import reset from './style/reset';

const App = () => (
  <Wrapper>
    <Global styles={reset} />
    <Outlet />
  </Wrapper>
);

const Wrapper = styled.main`
  ${layoutContainer}
`;

export default App;

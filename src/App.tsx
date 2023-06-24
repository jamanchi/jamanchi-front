import { Global } from '@emotion/react';
import { css } from '@emotion/css';
import { Outlet } from 'react-router-dom';
import { layout } from './style/variables';
import reset from './style/reset';

const wrapper = css({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: layout.maxWidth,
  minHeight: '100%',
});

const App = () => (
  <main css={wrapper}>
    <Global styles={reset} />
    <Outlet />
  </main>
);

export default App;

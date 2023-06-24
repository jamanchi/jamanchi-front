import { Global } from '@emotion/react';
import { css } from '@emotion/css';
import { layout } from './style/variables';
import reset from './style/reset';

const wrapper = css({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: layout.maxWidth,
  minHeight: '100%',
});

function App() {
  return (
    <main css={wrapper}>
      <Global styles={reset} />
    </main>
  );
}

export default App;

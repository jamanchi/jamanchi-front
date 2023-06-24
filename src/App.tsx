import { Global } from '@emotion/react';
import reset from './styleReset.tsx';

function App() {
  return <Global styles={reset} />;
}

export default App;

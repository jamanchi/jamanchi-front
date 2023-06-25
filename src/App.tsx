import { Global } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { layoutContainer } from '@/style/mixin';
import reset from './style/reset';
import ErrorFallback from '@/components/ErrorFallback';

const App = () => {
  const { reset: errorReset } = useQueryErrorResetBoundary();
  throw Error('dd');
  return (
    <ErrorBoundary
      onReset={errorReset}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
      )}
    >
      <Wrapper>
        <Global styles={reset} />
        <Outlet />
      </Wrapper>
    </ErrorBoundary>
  );
};

const Wrapper = styled.main`
  ${layoutContainer}
`;

export default App;

import { Global } from '@emotion/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { layoutContainer, pageContainer } from '@/style/mixin';
import reset from './style/reset';
import ErrorFallback from '@/components/ErrorFallback';
import Loader from './components/Loader';
import { shadow } from './style/variables/color';

const App = () => {
  const { reset: errorReset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={errorReset}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
      )}
    >
      <Wrapper>
        <Global styles={reset} />
        <Suspense
          fallback={
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          }
        >
          <Outlet />
        </Suspense>
      </Wrapper>
    </ErrorBoundary>
  );
};

const Wrapper = styled.main`
  ${layoutContainer}
`;
const LoaderWrapper = styled.div`
  ${pageContainer}
  box-shadow: ${shadow.box};
  border-radius: 20px;
  padding-top: 20px;
`;
export default App;

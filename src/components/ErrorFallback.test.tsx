import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

const ErrorComponent = () => {
  throw Error('테스트 에러');
};

const onReset = vi.fn();
vi.spyOn(console, 'error').mockImplementation(() => null);

describe('에러 바운더리 테스트', () => {
  it('에러발생 시 fallback Ui 랜더링', () => {
    render(
      <ErrorBoundary
        onReset={onReset}
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorFallback
            error={error}
            resetErrorBoundary={resetErrorBoundary}
          />
        )}
      >
        <ErrorComponent />
      </ErrorBoundary>
    );

    screen.getByText('에러가 발생하였습니다.');
    screen.getByText('에러명 : 테스트 에러');
  });

  it('리셋버튼 클릭 시 ErrorBoundary onReset 트리거', async () => {
    const user = userEvent.setup();
    render(
      <ErrorBoundary
        onReset={onReset}
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorFallback
            error={error}
            resetErrorBoundary={resetErrorBoundary}
          />
        )}
      >
        <ErrorComponent />
      </ErrorBoundary>
    );

    await user.click(screen.getByRole('button', { name: '재시도' }));

    expect(onReset).toHaveBeenCalled();
  });
});

import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { RenderByURL } from '@/utils/test-utils';

describe('결과 페이지 통합 테스트', () => {
  it('결과 페이지 렌더링', async () => {
    RenderByURL('/result?id=188&keywords=1,2');

    await waitFor(
      async () => {
        await screen.findByText('공유하기');
        await screen.findByText('비슷한 취미 확인하기');
        await screen.findAllByText('간단 설명');
        await screen.findAllByText('필수 물품');
      },
      { timeout: 5000 }
    );
  });
  it('공유하기 버튼 테스트', async () => {
    const user = userEvent.setup();
    RenderByURL('/result?id=188&keywords=1,2');

    expect(await navigator.clipboard.readText()).toBe('');

    await waitFor(
      async () => {
        await user.click(await screen.findByText('공유하기'));
      },
      { timeout: 5000 }
    );

    expect(await navigator.clipboard.readText()).toBe('http://localhost:3000/');
  });
  it('비슷한 취미 확인하기 버튼 테스트', async () => {
    const user = userEvent.setup();
    RenderByURL('/result?id=188&keywords=1,2');

    await waitFor(
      async () => {
        await user.click(await screen.findByText('비슷한 취미 확인하기'));
      },
      { timeout: 5000 }
    );

    await screen.findByText('테니스와 비슷한 취미');
  });
});

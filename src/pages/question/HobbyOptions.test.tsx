import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RenderByURL } from '@/utils/test-utils';

describe('취미 선택 페이지 통합 테스트', () => {
  it('취미 선택 페이지 렌더링', async () => {
    RenderByURL('/question/step2/1-111');

    await waitFor(
      async () => {
        await screen.findByText('원하시는 취미를 선택하세요');
      },
      { timeout: 5000 }
    );

    expect((await screen.findAllByRole('button')).length).toBe(5);
  });
  it('취미 버튼 클릭 시 페이지 이동', async () => {
    const user = userEvent.setup();
    RenderByURL('/question/step2/1-111');

    await waitFor(
      async () => {
        const hobbyBtn = await screen.findByText('수영');
        await user.click(hobbyBtn);
      },
      { timeout: 5000 }
    );

    await screen.findByText('원하는 키워드를 골라주세요');
    await screen.findByText('결과 보기');
  });
});

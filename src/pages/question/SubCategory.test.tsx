import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RenderByURL } from '@/utils/test-utils';

describe('서브 카테고리 통합 테스트', () => {
  it('질문 페이지 렌더링', async () => {
    RenderByURL('/question/step1/1');

    await screen.findByText('어디를 더 선호하시나요?');
    await screen.findByText('활동 난이도를 선택해 주세요');
    await screen.findByText('예산적인 제약이 있으신가요?');
    await screen.findByText('취미 추천 보기');
  });
  it('카테고리 클릭 후 다음 질문 페이지로 이동 검증', async () => {
    const user = userEvent.setup();
    RenderByURL('/question/step1/1');

    await user.click(await screen.findByText('야외'));
    await user.click(await screen.findByText('보통'));
    await user.click(await screen.findByText('중간 예산'));
    await user.click(await screen.findByText('취미 추천 보기'));

    await waitFor(
      async () => {
        await screen.findByText('원하시는 취미를 선택하세요');
      },
      { timeout: 5000 }
    );

    expect((await screen.findAllByRole('button')).length).toBe(5);
  });
});

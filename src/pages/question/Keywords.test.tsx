import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RenderByURL } from '@/utils/test-utils';

describe('키워드 선택 페이지 통합 테스트', () => {
  it('키워드 선택 페이지 렌더링', async () => {
    RenderByURL('/question/step3/188');

    await screen.findByText('원하는 키워드를 골라주세요');
    await screen.findByText('결과 보기');

    expect((await screen.findAllByRole('button')).length).toBe(9);
  });
  it('키워드 2개 선택 후 결과 보기 버튼 클릭', async () => {
    const user = userEvent.setup();
    RenderByURL('/question/step3/188');

    await user.click(await screen.findByText('간단 설명'));
    await user.click(await screen.findByText('필수 물품'));
    await user.click(await screen.findByText('결과 보기'));

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
  it('키워드 3개 선택 해도 2개만 적용', async () => {
    const user = userEvent.setup();
    RenderByURL('/question/step3/188');

    await user.click(await screen.findByText('간단 설명'));
    await user.click(await screen.findByText('필수 물품'));
    await user.click(await screen.findByText('비슷한 취미'));
    await user.click(await screen.findByText('결과 보기'));

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
});

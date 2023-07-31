import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { RenderByURL } from '@/utils/test-utils';

describe('취미 목록 페이지 통합 테스트', () => {
  it('API 응답을 통한 8개의 취미 카드 생성', async () => {
    RenderByURL('/hobby');

    expect((await screen.findAllByTestId('hobbyCard')).length).toBe(8);
  });

  it('취미 카드 클릭 시 키워드 페이지로 이동', async () => {
    const user = userEvent.setup();
    RenderByURL('/hobby');

    const hobbyCards = await screen.findAllByTestId('hobbyCard');

    await user.click(hobbyCards[0]);

    await screen.findByText('원하는 키워드를 골라주세요');
    throw Error('test');
  });
});

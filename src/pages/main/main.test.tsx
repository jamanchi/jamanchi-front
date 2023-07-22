import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RenderByURL } from '@/utils/test-utils';

describe('메인 페이지 테스트', () => {
  it('렌더링 테스트', async () => {
    RenderByURL('/');

    await screen.findByText('자만취');
    await screen.findByRole('button', { name: '새로운 취미 만나러 가기' });
    await screen.findByRole('button', { name: '다양한 취미 만나기' });
  });

  it('새로운 취미 만나러 가기 버튼 테스트', async () => {
    const user = userEvent.setup();
    RenderByURL('/');

    const newHobbyBtn = await screen.findByRole('button', {
      name: '새로운 취미 만나러 가기',
    });
    await user.click(newHobbyBtn);

    await screen.findByText('관심있는 카테고리를');
    await screen.findByText('선택해 주세요');
  });

  it('다양한 취미 만나기 버튼 테스트', async () => {
    const user = userEvent.setup();
    RenderByURL('/');

    const HobbiesBtn = await screen.findByRole('button', {
      name: '다양한 취미 만나기',
    });

    await user.click(HobbiesBtn);

    expect((await screen.findAllByTestId('hobbyCard')).length).toBe(8);
  });
});

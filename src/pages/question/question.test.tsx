import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { RenderByURL } from '@/utils/test-utils';

describe('질문 페이지 통합 테스트', () => {
  it('질문 페이지 렌더링', async () => {
    RenderByURL('/question');

    await screen.findByText('관심있는 카테고리를');
    await screen.findByText('선택해 주세요');
  });
  it('카테고리 클릭 후 다음 질문 페이지로 이동', async () => {
    const user = userEvent.setup();
    RenderByURL('/question');

    const categoryBtn = await screen.findByText('스포츠');
    await user.click(categoryBtn);

    await screen.findByText('어디를 더 선호하시나요?');
    await screen.findByText('활동 난이도를 선택해 주세요');
    await screen.findByText('예산적인 제약이 있으신가요?');
    await screen.findByText('취미 추천 보기');
  });
});

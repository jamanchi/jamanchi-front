import { rest } from 'msw';

let count = 0;

export const handlers = [
  // 답변결과조회
  rest.get('/api/v1/answer', (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        cost: {
          price: 10000,
          avgPrice: 30000,
        },
        description: '스키에 대한 설명입니다.',
        items: {
          item: '물건과 가격정보',
        },
      })
    )
  ),

  // 서비스 이용횟수조회 (get)
  rest.get('/api/v1/summary', (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        totalCount: count,
      })
    )
  ),

  // 이용횟수증가(put)입니다
  rest.put('/api/v1/summary', (_, res, ctx) => {
    count += 1;
    return res(ctx.status(200));
  }),
];

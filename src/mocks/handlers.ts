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

  // MainCategory 가져오기
  rest.get('/api/v1/maincategory/list', (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 0,
          name: '스포츠',
          iconSrc: 'https://img.icons8.com/3d-fluency/94/journey.png',
        },
        {
          id: 1,
          name: '창작',
          iconSrc: 'https://img.icons8.com/3d-fluency/94/steering-wheel.png',
        },
        {
          id: 2,
          name: '요리',
          iconSrc: 'https://img.icons8.com/3d-fluency/94/cab-stand.png',
        },
        {
          id: 3,
          name: '음악',
          iconSrc: 'https://img.icons8.com/3d-fluency/94/us-capitol.png',
        },
        {
          id: 4,
          name: '수집',
          iconSrc: 'https://img.icons8.com/3d-fluency/94/taxi.png',
        },
        {
          id: 5,
          name: '독서',
          iconSrc: 'https://img.icons8.com/3d-fluency/94/bus.png',
        },
        {
          id: 6,
          name: '여행',
          iconSrc: 'https://img.icons8.com/3d-fluency/94/adventure.png',
        },
        {
          id: 7,
          name: '식물 관리',
          iconSrc: 'https://img.icons8.com/3d-fluency/94/visit.png',
        },
        {
          id: 8,
          name: '수상 활동',
          iconSrc: 'https://img.icons8.com/3d-fluency/94/car.png',
        },
      ])
    )
  ),

  // 소분류에 따른 취미 5개 요청
  rest.get('/api/v1/questionResult/0111', (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        취미s: ['배드민턴', '야구', '축구', '농구', '골프'],
      })
    )
  ),
];

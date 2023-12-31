import { rest } from 'msw';

let count = 0;

export const handlers = [
  // 답변결과조회
  rest.get('/api/v1/answer', (req, res, ctx) => {
    const hobbyId = req.url.searchParams.get('hobbyId');
    const keywordId1 = req.url.searchParams.get('keywordId1');
    const keywordId2 = req.url.searchParams.get('keywordId2');
    if (hobbyId && keywordId1 && keywordId2) {
      return res(
        ctx.delay(2000),
        ctx.status(200),
        ctx.json({
          id: hobbyId,
          title: '테니스',
          image:
            'https://media.istockphoto.com/id/1270325495/ko/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A3%B9-%EC%8A%A4%ED%82%A4.jpg?s=2048x2048&w=is&k=20&c=lqEZTdJtO5Mai-4an6SaGEK58WC30wD_DZf0gxjOvNA=',
          result: [
            {
              keyword: '간단 설명',
              description: '테니스 입니다.',
            },
            {
              keyword: '필수 물품',
              description: '이용 금액은 30000원입니다.',
            },
          ],
        })
      );
    }

    return res(ctx.status(400));
  }),

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

  rest.get('/api/v1/summary', (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        totalCount: count,
      })
    )
  ),
  // 소분류에 따른 취미 5개 요청
  rest.get('/api/v1/hobbies/recommend/:id', (_, res, ctx) =>
    res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json([
        {
          id: 188,
          name: '수영',
          image:
            'https://storage.googleapis.com/jamanchi_bucket/726a4901-6abf-4b56-ba06-13b7154af020',
        },
        {
          id: 189,
          name: '자전거타기',
          image:
            'https://storage.googleapis.com/jamanchi_bucket/61dbd6db-8f74-47fb-989f-37bcdee52d08',
        },
        {
          id: 190,
          name: '테니스',
          image:
            'https://storage.googleapis.com/jamanchi_bucket/1d04dc82-c5e7-4933-98b3-741b316a4539',
        },
        {
          id: 191,
          name: '양궁',
          image:
            'https://storage.googleapis.com/jamanchi_bucket/d00b6adf-0ced-41b8-ac04-fe9b49b8df8b',
        },
        {
          id: 192,
          name: '골프',
          image:
            'https://storage.googleapis.com/jamanchi_bucket/aa4e4ca8-be36-45fb-894e-8f79150f232f',
        },
      ])
    )
  ),
  // 취미 리스트 요청
  rest.get('/api/v1/hobbies/sub', (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        contents: [
          { id: 125, name: '테니스', description: ['#test', '#test', '#test'] },
          {
            id: 127,
            name: '스케이트',
            description: ['#test', '#test', '#test'],
          },
          { id: 128, name: '탁구', description: ['#test', '#test', '#test'] },
          {
            id: 129,
            name: '배드민턴',
            description: ['#test', '#test', '#test'],
          },
          { id: 130, name: '스쿼시', description: ['#test', '#test', '#test'] },
          {
            id: 135,
            name: '게이트볼',
            description: ['#test', '#test', '#test'],
          },
          {
            id: 136,
            name: '에어로빅',
            description: ['#test', '#test', '#test'],
          },
          { id: 139, name: '골프', description: ['#test', '#test', '#test'] },
        ],
        last: true,
      })
    )
  ),
  // id로 취미 정보 조회
  rest.get('/api/v1/hobbies/:id', (_, res, ctx) =>
    res(
      ctx.json({
        id: 125,
        name: '테니스',
        image:
          'https://storage.googleapis.com/jamanchi_bucket/1d04dc82-c5e7-4933-98b3-741b316a4539',
      })
    )
  ),
];

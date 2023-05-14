import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: null,
          data: {
            prefCode: 1,
            prefName: '北海道',
          },
        })
      );
    }
  ),
];

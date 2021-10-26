import { rest } from 'msw';
import type { RestRequest } from 'msw';

import { apiConfig } from 'services/config';
import type { ProductListResponse } from 'services/products';

export const handlers = [
  rest.get<RestRequest, ProductListResponse>(apiConfig.fetchProducts, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        records: [{
          id: "1",
          fields: {
            name: 'Laptop',
            price: 123
          }
        }]
      })
    )
  }),

  rest.get('http://evil.com/login', async (req, res, ctx) => {

    // fetch ->
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();

    return res(
      ctx.status(200),
      ctx.json(data)
    );
  }),

  rest.post('http://evil.com/login', (req, res, ctx) => {
    // const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        // username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),
]

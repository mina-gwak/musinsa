import { rest } from 'msw';

import { PRODUCT_API } from '@constants';
import { products } from '@data';

const GET_PRODUCTS = rest.get(`${PRODUCT_API}`, (req, res, ctx) => {
  const page = req.url.searchParams.get('page');
  const delay = page === '0' ? 2000 : 0;
  return res(ctx.status(200), ctx.delay(delay), ctx.json(products[page]));
});

export const handlers = [GET_PRODUCTS];

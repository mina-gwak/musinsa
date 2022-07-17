import { rest } from 'msw';

import { PRODUCT_API } from '@constants';
import { BASE_URL } from '@constants/baseUrl';
import { products } from '@data';

const GET_PRODUCTS = rest.get(`${BASE_URL}${PRODUCT_API}`, (req, res, ctx) => {
  const page = req.url.searchParams.get('page');
  const delay = page === '0' ? 2000 : 0;
  return res(ctx.status(200), ctx.delay(delay), ctx.json(products[page]));
});

export const handlers = [GET_PRODUCTS];

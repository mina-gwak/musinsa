import { rest } from 'msw';

import { PRODUCT_API } from '@constants';
import { products } from '@data';

const GET_PRODUCTS = rest.get(`${PRODUCT_API}`, (req, res, ctx) => {
  const page = req.url.searchParams.get('page');
  return res(ctx.status(200), ctx.json(products[page]));
});

export const handlers = [GET_PRODUCTS];

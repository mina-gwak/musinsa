import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

import { PRODUCT_API } from '@constants';
import { ProductType } from '@data/products';

interface FetchProductPropsType {
  pageParam?: number;
}

export interface FetchProductsReturnType {
  list: ProductType[];
  isLast: boolean;
  nextPage: number;
}

export const fetchProducts = async ({
  pageParam = 0,
}: FetchProductPropsType): Promise<FetchProductsReturnType> => {
  const response = await axios.get(`${PRODUCT_API}`, {
    params: {
      page: pageParam,
    },
  });

  return { list: response.data.list, isLast: response.data.isLast, nextPage: pageParam + 1 };
};

export const useProductQuery = () =>
  useInfiniteQuery(['products'], fetchProducts, {
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLast) return lastPage.nextPage;
      return undefined;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

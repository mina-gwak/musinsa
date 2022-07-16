import { InfiniteData } from 'react-query';
import { useRecoilValue } from 'recoil';

import { FetchProductsReturnType } from '@query/product';
import { activeFilterState } from '@store/filter';

const useFilterData = (data: InfiniteData<FetchProductsReturnType> | undefined) => {
  const { filter, search } = useRecoilValue(activeFilterState);

  const filterData = () => {
    if (!data) return data;

    if (!search.length && !filter.length) {
      return data.pages.map(({ list }) => list.filter((product) => !product.isSoldOut));
    }

    return data.pages.map(({ list }) => {
      return list.filter((product) => {
        const isFilterValueExist = filter.length
          ? filter.every((value) => {
              if (value === 'isSoldOut') return true;
              return product[value];
            })
          : true;

        const isSoldOut = !filter.includes('isSoldOut') ? !product.isSoldOut : true;

        const isSearchValueExist = search.length
          ? search.every(
              (value) => product.goodsName.includes(value) || product.brandName.includes(value),
            )
          : true;

        return isFilterValueExist && isSoldOut && isSearchValueExist;
      });
    });
  };

  return filterData()?.flat(2);
};

export default useFilterData;

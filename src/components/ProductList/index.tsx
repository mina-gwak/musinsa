import { useRecoilValue } from 'recoil';

import Product from '@components/ProductList/Product';
import * as S from '@components/ProductList/ProductList.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { products } from '@data';
import { activeFilterState } from '@store/filter';

const ProductList = () => {
  const { filter, search } = useRecoilValue(activeFilterState);

  const filteredData = () => {
    if (!search.length && !filter.length)
      return products[0].list.filter((product) => !product.isSoldOut);

    return products[0].list.filter((product) => {
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
  };

  return (
    <>
      <S.Separator />
      <S.Container>
        <S.ProductList>
          {filteredData().map((product) => (
            <Product key={product.goodsNo} {...product} />
          ))}
        </S.ProductList>
        {!filteredData().length && (
          <S.NoSearchResult>
            <Icon iconName={ICON_NAME.EMPTY} iconSize={ICON_SIZE.X_LARGE} />
            검색 결과 없음
          </S.NoSearchResult>
        )}
      </S.Container>
    </>
  );
};

export default ProductList;

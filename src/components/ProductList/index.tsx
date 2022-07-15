import { useRecoilValue } from 'recoil';

import Product from '@components/ProductList/Product';
import * as S from '@components/ProductList/ProductList.style';
import { products } from '@data';
import { activeFilterState } from '@store/filter';

const ProductList = () => {
  const { filter, search } = useRecoilValue(activeFilterState);

  const filteredData = () => {
    if (!search.length && !filter.length) return products[0].list;

    return products[0].list.filter((product) => {
      const isSearchValueExist = search.some(
        (value) => product.goodsName.includes(value) || product.brandName.includes(value),
      );

      return isSearchValueExist;
    });
  };

  return (
    <>
      <S.Separator />
      <S.Container>
        {filteredData().map((product) => (
          <Product key={product.goodsNo} {...product} />
        ))}
      </S.Container>
    </>
  );
};

export default ProductList;

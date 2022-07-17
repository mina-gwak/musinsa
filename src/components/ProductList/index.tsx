import { useEffect, useRef } from 'react';

import Product from '@components/ProductList/Product';
import * as S from '@components/ProductList/ProductList.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import LoadingSpinner from '@components/common/LoadingSpinner';
import useFilterData from '@hooks/useFilterData';
import useObserver from '@hooks/useObserver';
import { useProductQuery } from '@query/product';

const ProductList = () => {
  const productRef = useRef<HTMLLIElement>(null);

  const [observe, disconnect] = useObserver({
    ref: productRef,
    callback: () => hasNextPage && fetchNextPage(),
    threshold: 0.5,
  });

  const { isLoading, data, hasNextPage, fetchNextPage } = useProductQuery();

  const filteredData = useFilterData(data);

  useEffect(() => {
    observe();
    return () => disconnect();
  }, [filteredData]);

  return !isLoading ? (
    <S.Container>
      <S.Separator />
      <S.Wrapper>
        <S.ProductList>
          {filteredData?.map((product, index) => {
            if (index === filteredData.length - 1) {
              return <Product key={`${product.goodsNo}${index}`} {...product} ref={productRef} />;
            }
            return <Product key={`${product.goodsNo}${index}`} {...product} />;
          })}
        </S.ProductList>
        {!filteredData?.length && (
          <S.NoSearchResult>
            <Icon iconName={ICON_NAME.EMPTY} iconSize={ICON_SIZE.X_LARGE} />
            검색 결과 없음
          </S.NoSearchResult>
        )}
      </S.Wrapper>
    </S.Container>
  ) : (
    <S.LoadingSpinnerContainer>
      <LoadingSpinner />
    </S.LoadingSpinnerContainer>
  );
};

export default ProductList;

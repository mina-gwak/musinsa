import Product from '@components/ProductList/Product';
import * as S from '@components/ProductList/ProductList.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import useFilterData from '@hooks/useFilterData';
import { useProductQuery } from '@query/product';

const ProductList = () => {
  const { data } = useProductQuery();

  const filteredData = useFilterData(data);

  return filteredData ? (
    <>
      <S.Separator />
      <S.Container>
        <S.ProductList>
          {filteredData.map((product) => {
            return <Product key={product.goodsNo} {...product} />;
          })}
        </S.ProductList>
        {!filteredData.length && (
          <S.NoSearchResult>
            <Icon iconName={ICON_NAME.EMPTY} iconSize={ICON_SIZE.X_LARGE} />
            검색 결과 없음
          </S.NoSearchResult>
        )}
      </S.Container>
    </>
  ) : null;
};

export default ProductList;

import Product from '@components/ProductList/Product';
import * as S from '@components/ProductList/ProductList.style';
import { products } from '@data';

const ProductList = () => {
  // TODO: 데이터 요청 후 보여주도록 변경
  return (
    <>
      <S.Separator />
      <S.Container>
        {products[0].list.map((product) => (
          <Product key={product.goodsNo} {...product} />
        ))}
      </S.Container>
    </>
  );
};

export default ProductList;

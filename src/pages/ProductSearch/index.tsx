import Header from '@components/Header';
import ProductList from '@components/ProductList';
import * as S from '@pages/ProductSearch/ProductSearch.style';

const ProductSearch = () => {
  return (
    <S.Container>
      <Header />
      <ProductList />
    </S.Container>
  );
};

export default ProductSearch;

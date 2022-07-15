import { SyntheticEvent } from 'react';

import { Images } from '@assets/images';
import * as S from '@components/ProductList/ProductList.style';
import { ProductType } from '@data/products';
import { addComma } from '@utils/addComma';

const Product = ({
  goodsName,
  price,
  brandName,
  imageUrl,
  linkUrl,
  brandLinkUrl,
  normalPrice,
  isSale,
  saleRate,
  isSoldOut,
  isExclusive,
}: ProductType) => {
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.target as HTMLImageElement;
    image.src = Images.DefaultImage;
    image.style.objectFit = 'fill';
  };

  return (
    <S.Product>
      <S.ImageContainer href={linkUrl}>
        <S.Image src={imageUrl} alt={goodsName} onError={handleImageError} />
        {isSoldOut && <S.SoldOutLayer>SOLD OUT</S.SoldOutLayer>}
      </S.ImageContainer>
      <S.ProductInfo>
        {isExclusive && <S.Label>단독</S.Label>}
        <S.Brand href={brandLinkUrl}>{brandName}</S.Brand>
        <S.Name href={linkUrl}>
          <h2>{goodsName}</h2>
        </S.Name>
        {isSale ? (
          <>
            <S.PriceContainer>
              <S.FinalPrice>{addComma(price)}원</S.FinalPrice>
              <S.SaleRate>{saleRate}%</S.SaleRate>
            </S.PriceContainer>
            <S.Price>{addComma(normalPrice)}원</S.Price>
          </>
        ) : (
          <S.FinalPrice>{addComma(price)}원</S.FinalPrice>
        )}
      </S.ProductInfo>
    </S.Product>
  );
};

export default Product;

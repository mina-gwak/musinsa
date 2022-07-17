import styled from 'styled-components';

import { flexCenter } from '@assets/styles/mixin';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Separator = styled.div`
  height: 10px;
  background-color: ${({ theme }) => theme.colors.grey5};
`;

export const NoSearchResult = styled.div`
  ${flexCenter};
  flex-direction: column;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.grey2};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const ImageContainer = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 60vw;
`;

export const LoadingSpinnerContainer = styled.div`
  width: 100%;
  height: 100px;
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 2);

  @media (min-width: 768px) {
    width: calc(100% / 3);

    ${ImageContainer} {
      height: 40vw;
    }
  }

  @media (min-width: 1024px) {
    width: calc(100% / 4);

    ${ImageContainer} {
      height: 30vw;
    }
  }

  @media (min-width: 1440px) {
    width: calc(100% / 5);

    ${ImageContainer} {
      height: 25vw;
    }
  }

  @media (min-width: 1920px) {
    width: calc(100% / 6);

    ${ImageContainer} {
      height: 20vw;
    }
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SoldOutLayer = styled.div`
  ${flexCenter};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.grey1};
  font-size: ${({ theme }) => theme.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
`;

export const Label = styled.span`
  position: absolute;
  top: -12%;
  left: 10px;
  display: inline-block;
  width: 33px;
  height: 26px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  letter-spacing: -0.5px;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 6px 0 4px;
`;

export const ProductInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

export const Brand = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  margin-bottom: 8px;
`;

export const Name = styled.a`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 18px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FinalPrice = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.grey2};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration-line: line-through;
`;

export const SaleRate = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

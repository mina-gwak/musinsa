import * as S from '@components/common/Image/Image.style';

export interface ImagePropsType {
  url: string;
  alt: string;
}

const Image = ({ url, alt }: ImagePropsType) => {
  return <S.Image src={url} alt={alt} />;
};

export default Image;

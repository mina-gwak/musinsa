import * as S from '@components/Header/SearchField/SearchField.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';

const SearchField = () => {
  return (
    <S.Container>
      <S.SearchInputBox>
        <Icon iconName={ICON_NAME.SEARCH} iconSize={ICON_SIZE.LARGE} />
        <S.SearchInput type='text' placeholder='상품명 검색' />
      </S.SearchInputBox>
    </S.Container>
  );
};

export default SearchField;

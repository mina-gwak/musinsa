import { useRecoilValue } from 'recoil';

import * as S from '@components/Header/SearchField/SearchField.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { isSearchFieldActiveState } from '@store/searchField';

const SearchField = () => {
  const isSearchFieldActive = useRecoilValue(isSearchFieldActiveState);

  return isSearchFieldActive ? (
    <S.Container>
      <S.SearchInputBox>
        <Icon iconName={ICON_NAME.SEARCH} iconSize={ICON_SIZE.LARGE} />
        <S.SearchInput type='text' placeholder='상품명 검색' autoFocus />
      </S.SearchInputBox>
    </S.Container>
  ) : null;
};

export default SearchField;

import { useRecoilState, useRecoilValue } from 'recoil';

import * as S from '@components/Header/FilterOptions/FilterOptions.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { activeFilterState } from '@store/filter';
import { isSearchFieldActiveState } from '@store/searchField';

const SearchButton = () => {
  const [isSearchFieldActive, setIsSearchFieldActive] = useRecoilState(isSearchFieldActiveState);
  const { search } = useRecoilValue(activeFilterState);

  const isFilterActive = search.length > 0;

  const toggleButton = () =>
    setIsSearchFieldActive((prevIsSearchFieldActive) => !prevIsSearchFieldActive);

  return (
    <S.Filter
      onClick={toggleButton}
      isFilterActive={isFilterActive}
      isSearchFieldActive={isSearchFieldActive}
    >
      검색
      <Icon iconName={ICON_NAME.SEARCH} iconSize={ICON_SIZE.MEDIUM} />
    </S.Filter>
  );
};

export default SearchButton;

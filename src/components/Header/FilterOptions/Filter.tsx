import { useRecoilState } from 'recoil';

import * as S from '@components/Header/FilterOptions/FilterOptions.style';
import { FilterTitleType, FilterValueType } from '@data/filterOptions';
import { activeFilterState } from '@store/filter';
import { isSearchFieldActiveState } from '@store/searchField';

interface FilterPropsType {
  title: FilterTitleType;
  value: FilterValueType;
}

const Filter = ({ title, value }: FilterPropsType) => {
  const [{ filter }, setActiveFilter] = useRecoilState(activeFilterState);
  const [isSearchFieldActive, setIsSearchFieldActive] = useRecoilState(isSearchFieldActiveState);

  const isFilterActive = filter.includes(value);

  const toggleFilter = () => {
    const updatedFilter = filter.includes(value)
      ? filter.filter((activeFilter) => activeFilter !== value)
      : filter.concat(value);

    setActiveFilter(({ search }) => {
      return { search, filter: updatedFilter };
    });

    isSearchFieldActive && setIsSearchFieldActive(false);
  };

  return (
    <S.Filter onClick={toggleFilter} isFilterActive={isFilterActive}>
      {title}
    </S.Filter>
  );
};

export default Filter;

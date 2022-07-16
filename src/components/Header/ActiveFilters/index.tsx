import { useRecoilState, useResetRecoilState } from 'recoil';

import ActiveFilter from '@components/Header/ActiveFilters/ActiveFilter';
import * as S from '@components/Header/ActiveFilters/ActiveFilters.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { filterOptions } from '@data';
import { FilterValueType } from '@data/filterOptions';
import { activeFilterState } from '@store/filter';

const ActiveFilters = () => {
  const [{ filter, search }, setActiveFilter] = useRecoilState(activeFilterState);
  const resetActiveFilter = useResetRecoilState(activeFilterState);

  const isActiveFilterExist = filter.length > 0 || search.length > 0;

  const deactivateFilter = (value: FilterValueType | string) => () => {
    setActiveFilter(({ filter, search }) => {
      return {
        filter: filter.filter((activeFilter) => activeFilter !== value),
        search: search.filter((activeFilter) => activeFilter !== value),
      };
    });
  };

  return isActiveFilterExist ? (
    <S.Container>
      <S.ActiveFilters>
        {filter.map((value: FilterValueType) => (
          <li key={value}>
            <ActiveFilter value={filterOptions[value]} deactivateFilter={deactivateFilter(value)} />
          </li>
        ))}
        {search.map((value: string) => (
          <li key={value}>
            <ActiveFilter value={value} deactivateFilter={deactivateFilter(value)} />
          </li>
        ))}
      </S.ActiveFilters>
      <S.RefreshButton onClick={resetActiveFilter}>
        <Icon iconName={ICON_NAME.REFRESH} iconSize={ICON_SIZE.LARGE} />
      </S.RefreshButton>
    </S.Container>
  ) : null;
};

export default ActiveFilters;

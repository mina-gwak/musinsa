import { useRecoilValue } from 'recoil';

import ActiveFilter from '@components/Header/ActiveFilters/ActiveFilter';
import * as S from '@components/Header/ActiveFilters/ActiveFilters.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { activeFilterState } from '@store/filter';

const ActiveFilters = () => {
  const { filter, search } = useRecoilValue(activeFilterState);

  const isActiveFilterExist = filter.length > 0 || search.length > 0;

  return isActiveFilterExist ? (
    <S.Container>
      <S.ActiveFilters>
        {filter.concat(search).map((value) => (
          <li key={value}>
            <ActiveFilter value={value} />
          </li>
        ))}
      </S.ActiveFilters>
      <S.RefreshButton>
        <Icon iconName={ICON_NAME.REFRESH} iconSize={ICON_SIZE.LARGE} />
      </S.RefreshButton>
    </S.Container>
  ) : null;
};

export default ActiveFilters;

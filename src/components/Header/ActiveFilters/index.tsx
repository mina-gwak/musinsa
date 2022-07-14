import ActiveFilter from '@components/Header/ActiveFilters/ActiveFilter';
import * as S from '@components/Header/ActiveFilters/ActiveFilters.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';

const ActiveFilters = () => {
  // TODO: 활성화된 필터 목록 가져와서 사용하기
  const filterList = ['세일상품', '단독상품', '품절포함'];

  return (
    <S.Container>
      <S.ActiveFilters>
        {filterList.map((value) => (
          <li>
            <ActiveFilter value={value} />
          </li>
        ))}
      </S.ActiveFilters>
      <S.RefreshButton>
        <Icon iconName={ICON_NAME.REFRESH} iconSize={ICON_SIZE.LARGE} />
      </S.RefreshButton>
    </S.Container>
  );
};

export default ActiveFilters;

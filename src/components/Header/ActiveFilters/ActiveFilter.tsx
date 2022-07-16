import * as S from '@components/Header/ActiveFilters/ActiveFilters.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';

interface ActiveFilterPropsType {
  value: string;
  deactivateFilter: () => void;
}

const ActiveFilter = ({ value, deactivateFilter }: ActiveFilterPropsType) => {
  return (
    <S.ActiveFilter onClick={deactivateFilter}>
      {value}
      <Icon iconName={ICON_NAME.CLOSE} iconSize={ICON_SIZE.SMALL} />
    </S.ActiveFilter>
  );
};

export default ActiveFilter;

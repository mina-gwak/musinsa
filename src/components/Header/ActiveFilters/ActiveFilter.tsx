import * as S from '@components/Header/ActiveFilters/ActiveFilters.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';

interface ActiveFilterPropsType {
  value: string;
}

const ActiveFilter = ({ value }: ActiveFilterPropsType) => {
  return (
    <S.ActiveFilter>
      {value}
      <Icon iconName={ICON_NAME.CLOSE} iconSize={ICON_SIZE.SMALL} />
    </S.ActiveFilter>
  );
};

export default ActiveFilter;

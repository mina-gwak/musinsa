import { Icons, IconsType } from '@assets/icons';
import * as S from '@components/common/Icon/Icon.style';
import { ICON_SIZE } from '@components/common/Icon/constants';

export interface IconPropsType {
  iconName: IconsType;
  iconSize?: string;
}

const Icon = ({ iconName, iconSize = ICON_SIZE.SMALL }: IconPropsType) => {
  return <S.Icon src={Icons[iconName]} size={iconSize} />;
};

export default Icon;

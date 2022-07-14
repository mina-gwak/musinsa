import { Link } from 'react-router-dom';

import { Images } from '@assets/images';
import ActiveFilters from '@components/Header/ActiveFilters';
import FilterOptions from '@components/Header/FilterOptions';
import * as S from '@components/Header/Header.style';
import SearchField from '@components/Header/SearchField';
import Image from '@components/common/Image';
import { IMAGE_NAME } from '@components/common/Image/constants';

const Header = () => {
  return (
    <S.Container>
      <S.AppBar>
        <Link to='/'>
          <Image url={Images[IMAGE_NAME.LOGO]} alt='Musinsa Logo' />
        </Link>
      </S.AppBar>
      <FilterOptions />
      <SearchField />
      <ActiveFilters />
      <S.Separator />
    </S.Container>
  );
};

export default Header;

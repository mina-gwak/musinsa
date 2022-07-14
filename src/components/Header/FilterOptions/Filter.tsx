import { useState } from 'react';

import * as S from '@components/Header/FilterOptions/FilterOptions.style';
import { FilterTitleType, FilterValueType } from '@data/filterOptions';

interface FilterPropsType {
  title: FilterTitleType;
  value: FilterValueType;
}

const Filter = ({ title, value }: FilterPropsType) => {
  // TODO: Recoil 사용
  const [isFilterActive, setIsFilterActive] = useState(false);

  const toggleFilter = () => setIsFilterActive((prevIsFilterActive) => !prevIsFilterActive);

  return (
    <S.Filter onClick={toggleFilter} isFilterActive={isFilterActive}>
      {title}
    </S.Filter>
  );
};

export default Filter;

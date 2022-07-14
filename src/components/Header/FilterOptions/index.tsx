import Filter from '@components/Header/FilterOptions/Filter';
import * as S from '@components/Header/FilterOptions/FilterOptions.style';
import SearchButton from '@components/Header/FilterOptions/SearchButton';
import { filterOptions } from '@data';
import { FilterTitleType, FilterValueType } from '@data/filterOptions';

const FilterOptions = () => {
  return (
    <S.FilterOptions>
      <SearchButton />
      {(Object.entries(filterOptions) as Array<[FilterValueType, FilterTitleType]>).map(
        ([value, title]) => (
          <Filter title={title} value={value} />
        ),
      )}
    </S.FilterOptions>
  );
};

export default FilterOptions;

import { FormEvent, useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import * as S from '@components/Header/SearchField/SearchField.style';
import Icon from '@components/common/Icon';
import { ICON_NAME, ICON_SIZE } from '@components/common/Icon/constants';
import { activeFilterState } from '@store/filter';
import { isSearchFieldActiveState } from '@store/searchField';

const SearchField = () => {
  const [value, setValue] = useState('');
  const isSearchFieldActive = useRecoilValue(isSearchFieldActiveState);
  const setActiveFilter = useSetRecoilState(activeFilterState);

  const isValueExist = value.length > 0;

  const resetValue = () => setValue('');

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setActiveFilter(({ filter, search }) => {
      return { filter, search: [...new Set([...search, value])] };
    });
    resetValue();
  };

  return isSearchFieldActive ? (
    <S.Container onSubmit={handleFormSubmit}>
      <S.SearchInputBox>
        <Icon iconName={ICON_NAME.SEARCH} iconSize={ICON_SIZE.LARGE} />
        <S.SearchInput
          type='text'
          placeholder='상품명 검색'
          autoFocus
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <S.ResetButton type='button' isValueExist={isValueExist} onClick={resetValue}>
          <Icon iconName={ICON_NAME.CLOSE} iconSize={ICON_SIZE.SMALL} />
        </S.ResetButton>
      </S.SearchInputBox>
    </S.Container>
  ) : null;
};

export default SearchField;

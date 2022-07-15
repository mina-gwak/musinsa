import { atom } from 'recoil';

import { FilterValueType } from '@data/filterOptions';

interface defaultStateType {
  filter: FilterValueType[];
  search: string[];
}

const defaultState: defaultStateType = {
  filter: [],
  search: [],
};

export const activeFilterState = atom({
  key: 'activeFilterState',
  default: defaultState,
});

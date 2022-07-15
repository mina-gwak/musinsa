import { atom } from 'recoil';

interface defaultStateType {
  filter: string[];
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

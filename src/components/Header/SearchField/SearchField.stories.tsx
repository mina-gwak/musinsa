import { useEffect } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useSetRecoilState } from 'recoil';

import SearchField from '@components/Header/SearchField';
import { isSearchFieldActiveState } from '@store/searchField';

export default {
  title: 'Header/SearchField',
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

export const Default: ComponentStory<typeof SearchField> = () => {
  const setIsSearchFieldActive = useSetRecoilState(isSearchFieldActiveState);

  useEffect(() => {
    setIsSearchFieldActive(true);
  }, []);

  return <SearchField />;
};

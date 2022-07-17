import { useEffect } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useSetRecoilState } from 'recoil';

import ActiveFilters from '@components/Header/ActiveFilters';
import { activeFilterState } from '@store/filter';

export default {
  title: 'Header/ActiveFilters',
  component: ActiveFilters,
} as ComponentMeta<typeof ActiveFilters>;

export const Default: ComponentStory<typeof ActiveFilters> = () => {
  const setActiveFilter = useSetRecoilState(activeFilterState);

  useEffect(() => {
    setActiveFilter({ filter: ['isSoldOut'], search: [] });
  }, []);

  return <ActiveFilters />;
};

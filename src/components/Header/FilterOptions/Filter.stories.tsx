import { ComponentMeta, ComponentStory } from '@storybook/react';

import Filter from '@components/Header/FilterOptions/Filter';
import { filterOptions } from '@data';

export default {
  title: 'Header/Filter',
  component: Filter,
  args: {
    title: Object.values(filterOptions)[0],
    value: Object.keys(filterOptions)[0],
  },
} as ComponentMeta<typeof Filter>;

export const Default: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

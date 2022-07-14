import { ComponentMeta, ComponentStory } from '@storybook/react';

import FilterOptions from '@components/Header/FilterOptions';

export default {
  title: 'Header/FilterOptions',
  component: FilterOptions,
} as ComponentMeta<typeof FilterOptions>;

export const Default: ComponentStory<typeof FilterOptions> = () => <FilterOptions />;

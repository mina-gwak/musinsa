import { ComponentMeta, ComponentStory } from '@storybook/react';

import ActiveFilters from '@components/Header/ActiveFilters';

export default {
  title: 'Header/ActiveFilters',
  component: ActiveFilters,
} as ComponentMeta<typeof ActiveFilters>;

export const Default: ComponentStory<typeof ActiveFilters> = () => <ActiveFilters />;

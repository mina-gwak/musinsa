import { ComponentMeta, ComponentStory } from '@storybook/react';

import ActiveFilter from '@components/Header/ActiveFilters/ActiveFilter';

export default {
  title: 'Header/ActiveFilter',
  component: ActiveFilter,
  args: {
    value: '세일상품',
  },
} as ComponentMeta<typeof ActiveFilter>;

export const Default: ComponentStory<typeof ActiveFilter> = (args) => <ActiveFilter {...args} />;

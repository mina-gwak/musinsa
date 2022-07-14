import { ComponentMeta, ComponentStory } from '@storybook/react';

import SearchField from '@components/Header/SearchField';

export default {
  title: 'Header/SearchField',
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

export const Default: ComponentStory<typeof SearchField> = () => <SearchField />;

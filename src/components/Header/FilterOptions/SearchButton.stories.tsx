import { ComponentMeta, ComponentStory } from '@storybook/react';

import SearchButton from '@components/Header/FilterOptions/SearchButton';

export default {
  title: 'Header/SearchButton',
  component: SearchButton,
} as ComponentMeta<typeof SearchButton>;

export const Default: ComponentStory<typeof SearchButton> = () => <SearchButton />;

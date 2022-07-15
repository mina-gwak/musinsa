import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductList from '@components/ProductList';

export default {
  title: 'ProductList/ProductList',
  component: ProductList,
} as ComponentMeta<typeof ProductList>;

export const Default: ComponentStory<typeof ProductList> = () => <ProductList />;

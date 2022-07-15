import { ComponentMeta, ComponentStory } from '@storybook/react';

import Product from '@components/ProductList/Product';
import { product } from '@data/products';

export default {
  title: 'ProductList/Product',
  component: Product,
  args: {
    ...product,
  },
} as ComponentMeta<typeof Product>;

export const Default: ComponentStory<typeof Product> = (args) => <Product {...args} />;

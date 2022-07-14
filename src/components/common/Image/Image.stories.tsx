import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Images } from '@assets/images';
import Image from '@components/common/Image';
import { IMAGE_NAME } from '@components/common/Image/constants';

export default {
  title: 'Common/Image',
  component: Image,
  args: {
    url: Images[IMAGE_NAME.LOGO],
    alt: 'Musinsa Logo',
  },
} as ComponentMeta<typeof Image>;

export const Default: ComponentStory<typeof Image> = (args) => <Image {...args} />;

import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoadingSpinner from '@components/common/LoadingSpinner';
import * as S from '@components/common/LoadingSpinner/LoadingSpinner.style';
import { SPINNER_SIZE } from '@components/common/LoadingSpinner/constants';

export default {
  title: 'Common/LoadingSpinner',
  component: LoadingSpinner,
  args: {
    spinnerSize: SPINNER_SIZE.SMALL,
  },
  argTypes: {
    spinnerSize: {
      control: {
        type: 'radio',
      },
      options: [...Object.values(SPINNER_SIZE)],
    },
  },
} as ComponentMeta<typeof LoadingSpinner>;

export const Default: ComponentStory<typeof LoadingSpinner> = (args) => (
  <S.StoryContainer>
    <LoadingSpinner {...args} />
  </S.StoryContainer>
);

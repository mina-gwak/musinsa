import { DefaultTheme } from 'styled-components';

const colors = {
  black: '#000000',
  grey1: '#777777',
  grey2: '#AAAAAA',
  grey3: '#CCCCCC',
  grey4: '#EEEEEE',
  grey5: '#F1F1F1',
  grey6: '#F9F9F9',
  white: '#FFFFFF',
  blue: '#0078FF',
  red: '#FF0000',
  green: '#18A286',
};

const fontSizes = {
  large: '1rem', // 16px
  medium: '0.875rem', // 14px
  small: '0.75rem', // 12px
  xSmall: '0.6875rem', // 11px
};

const fontWeights = {
  bold: '700',
  medium: '500',
  regular: '400',
};

export type ColorsType = typeof colors;
export type FontSizesType = typeof fontSizes;
export type FontWeightsType = typeof fontWeights;

export const theme: DefaultTheme = {
  colors,
  fontSizes,
  fontWeights,
};

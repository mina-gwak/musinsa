import SVG from 'react-inlinesvg';
import styled, { css } from 'styled-components';

import { ICON_SIZE } from '@components/common/Icon/constants';

type StyledIconProps = {
  size: string;
};

const sizeStyles = css<StyledIconProps>`
  ${({ size }) =>
    size === ICON_SIZE.SMALL &&
    css`
      width: 0.875rem;
      height: 0.875rem;
    `}

  ${({ size }) =>
    size === ICON_SIZE.MEDIUM &&
    css`
      width: 1.125rem;
      height: 1.125rem;
    `}

  ${({ size }) =>
    size === ICON_SIZE.LARGE &&
    css`
      width: 1.375rem;
      height: 1.375rem;
    `}

  ${({ size }) =>
    size === ICON_SIZE.X_LARGE &&
    css`
      width: 5.625rem;
      height: 5.625rem;
    `}
`;

export const Icon = styled(SVG)<StyledIconProps>`
  flex-shrink: 0;

  /* 사이즈 */
  ${sizeStyles}
`;

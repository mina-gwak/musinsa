import styled, { css, keyframes } from 'styled-components';

import { SPINNER_SIZE } from '@components/common/LoadingSpinner/constants';

type StyledSpinnerProps = {
  size: string;
};

const sizeStyles = css<StyledSpinnerProps>`
  ${({ size }) =>
    size === SPINNER_SIZE.SMALL &&
    css`
      width: 1rem;
      height: 1rem;
      border-width: 2px;
      margin-top: -0.5rem;
      margin-left: -0.5rem;
    `}

  ${({ size }) =>
    size === SPINNER_SIZE.MEDIUM &&
    css`
      width: 2rem;
      height: 2rem;
      border-width: 3px;
      margin-top: -1rem;
      margin-left: -1rem;
    `}

  ${({ size }) =>
    size === SPINNER_SIZE.LARGE &&
    css`
      width: 3rem;
      height: 3rem;
      border-width: 4px;
      margin-top: -1.5rem;
      margin-left: -1.5rem;
    `}
`;

export const StoryContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
`;

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div<StyledSpinnerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.blue};
  animation: ${spinnerAnimation} 800ms ease infinite;

  /* 사이즈 */
  ${sizeStyles};
`;

import styled from 'styled-components';

import { flexCenter } from '@assets/styles/mixin';

export const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const AppBar = styled.div`
  ${flexCenter};
  height: 50px;
`;

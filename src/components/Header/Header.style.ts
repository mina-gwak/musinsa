import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const AppBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

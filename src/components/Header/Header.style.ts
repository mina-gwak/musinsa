import styled from 'styled-components';

export const Container = styled.header``;

export const Separator = styled.div`
  height: 10px;
  background-color: ${({ theme }) => theme.colors.grey5};
`;

export const AppBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

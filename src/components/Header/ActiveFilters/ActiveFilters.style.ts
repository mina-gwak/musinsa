import styled from 'styled-components';

export const ActiveFilters = styled.div``;

export const ActiveFilter = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 26px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 4px;
  padding: 5px 8px 4px 10px;

  svg {
    position: relative;
    top: -1px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

export const ActiveFilters = styled.ul`
  display: flex;
  gap: 5px;
  width: 100%;
  padding-left: 12px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    flex-shrink: 0;
  }
`;

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

export const RefreshButton = styled.button`
  flex-shrink: 0;
  width: 50px;
  height: 50px;

  svg {
    position: relative;
    top: 2px;
  }
`;

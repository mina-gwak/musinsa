import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey6};
  padding: 20px 15px;
`;

export const SearchInputBox = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  padding: 9px 8px 8px 36px;
  transition: border-color 300ms;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey2};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.grey2};
  }
`;

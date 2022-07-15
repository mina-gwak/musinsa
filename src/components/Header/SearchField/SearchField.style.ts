import styled from 'styled-components';

export const Container = styled.form`
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

export const ResetButton = styled.button<{ isValueExist: boolean }>`
  position: absolute;
  top: 50%;
  right: 0;
  width: 40px;
  height: 40px;
  background: radial-gradient(
    circle,
    #e5e5e5 0,
    #e5e5e5 34%,
    rgba(229, 229, 229, 0) 34%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: ${({ isValueExist }) => (isValueExist ? '1' : '0')};
  visibility: ${({ isValueExist }) => (isValueExist ? 'visible' : 'hidden')};
  transform: translateY(-50%);
  transition: all 300ms;

  svg {
    left: 13px;
  }
`;

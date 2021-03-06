import styled, { css } from 'styled-components';

import { flexCenter } from '@assets/styles/mixin';

interface FilterActiveStylesType {
  isFilterActive: boolean;
}

interface SearchFieldActiveStylesType {
  isSearchFieldActive?: boolean;
}

const filterActiveStyles = css<FilterActiveStylesType>`
  ${({ isFilterActive }) =>
    isFilterActive &&
    css`
      color: ${({ theme }) => theme.colors.blue};
    `}
`;

const searchFieldActiveStyles = css<SearchFieldActiveStylesType>`
  ${({ isSearchFieldActive }) =>
    isSearchFieldActive &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};
      border: none;
    `}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 55px;
  padding: 0 7px;
`;

export const Filter = styled.button<FilterActiveStylesType & SearchFieldActiveStylesType>`
  ${flexCenter};
  gap: 3px;
  width: 79px;
  height: 35px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 18px;
  padding: 8px 0 7px;
  transition: all 200ms;

  svg {
    position: relative;
    top: -1px;
  }

  /* 필터 활성화 여부 */
  ${filterActiveStyles}

  /* 검색 필드 활성화 여부 */ 
  ${searchFieldActiveStyles}
`;

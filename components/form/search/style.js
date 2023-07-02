import { styled } from 'styled-components';

export const SearchWrapper = styled.div`
  height: 44px;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
`;

export const SearchInput = styled.input`
  height: 100%;
  border: none;
  padding: 10px 14px;
  width: 100%;
  outline: none;
  color: var(--gray-500);
`;

export const IconWrapper = styled.div`
  left: 14px;
  top: 12px;
`;

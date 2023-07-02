import { styled } from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 26px;
`;

export const InputEl = styled.input`
  outline: 1px solid var(--purple-400);
  width: 100%;
  height: 48px;
  border: none;
  padding: 12px 14px;
  border-radius: 24px;
  display: block;
  color: var(--gray-iron);
`;

export const Label = styled.label`
  color: var(--gray-iron-700);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  display: block;
  margin-bottom: 8px;
`;

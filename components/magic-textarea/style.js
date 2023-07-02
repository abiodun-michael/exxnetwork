import { styled } from 'styled-components';

export const MagicInputWrapper = styled.div`
  display: grid;
  min-height: 237px;
  grid-template-columns: 32px auto;
  border: 1px solid var(--purple-400);
  overflow: auto;
  border-radius: 16px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const LineNumberWrapper = styled.div`
  background: var(--purple-50);
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  gap: 8px;

  & > span {
    color: var(--purple-400);
    font-size: 12px;
    line-height: 18px;
  }
`;

export const TextareaWrapper = styled.div`
  height: 100%;
  border-left: none;
  padding: 16px;
  position: relative;

  &:fullscreen {
    background-color: white;
  }
`;

export const ExpandCta = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;

  &:hover {
    background: var(--purple-600);
  }
`;

export const EditableWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;

  & > .error {
    color: red;
  }
`;

export const EditableEl = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: var(--gray-iron-500);
  outline: none;
  white-space: nowrap;
`;

export const ErrorWrapper = styled.div`
  border: 1px solid var(--error-300);
  background-color: var(--error-25);
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  margin-top: 16px;

  & > p {
    font-size: 12px;
    color: var(--error-600);
    line-height: 18px;

    & > span {
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const CtaGroupWrapper = styled.div`
  margin-top: 8px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const InputEl = styled.input`
  height: 48px;
  padding: 12px 14px;
  border-radius: 24px;
  background: var(--light-gray);
  width: 100%;
  outline: none;
  border: none;
  color: var(--gray-iron);
  font-size: 16px;
`;

export const BtnGroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UploaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  align-items: center;
`;

export const CSVBtn = styled.button`
  outline: none;
  border: none;
  background: transparent;
  color: var(--purple-600);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

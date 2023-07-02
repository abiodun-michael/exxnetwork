import { styled } from 'styled-components';

export const ToastWrapper = styled.div`
  width: 400px;
  height: 98px;
  background-color: white;
  display: flex;
  gap: 20px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px -2px #10182808;
  box-shadow: 0px 12px 16px -4px #10182814;
  position: relative;
  margin-top: 54px;

  & .title {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--gray-900);
  }

  & .desc {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--gray-500);
  }
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 28px;
  border: 6px solid var(--success-50);
  background-color: var(--success-100);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CloseWrapper = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

import { styled } from 'styled-components';

export const WalletWrapper = styled.div`
  height: 102px;
  border-radius: 8px;
  border: 1px solid var(--gray-iron-100);
  padding: 24px;

  & > p {
    color: var(--gray-iron-500);
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 4px;
    font-weight: 500;
  }

  & > h5 {
    color: var(--purple-600);
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
  }
`;

export const BalanceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;

  & > p {
    color: var(--gray-iron-400);
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;

    & > span {
      color: var(--purple-600);
    }
  }
`;

export const Info = styled.div`
  height: 52px;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid var(--warning-300);
  background: var(--warning-25);
  display: flex;
  gap: 12px;
  margin-top: 32px;

  & > p {
    color: var(--warning-600);

    & > span {
      font-weight: 500;
      margin-left: 8px;
      cursor: pointer;
    }
  }
`;

export const RecipientWrapper = styled.div`
  height: 228px;
  overflow: auto;
  padding-top: 16px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  z-index: 2;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 8px;
  }
`;

export const RecipientSectionTitle = styled.h4`
  color: var(--gray-iron-900);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-top: 32px;
`;

export const RecipientItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
  align-items: center;

  & > p {
    color: var(--gray-iron);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }

  & > span {
    color: var(--purple-600);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-iron-100);
  }
`;

export const BtnGroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

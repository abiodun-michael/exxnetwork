import styled from 'styled-components';

export const ProfileWrapper = styled.li`
  margin-top: 24px;
  border-top: 1px solid var(--gray-200);
  height: 64px;
  display: flex;
  gap: 12px;
  padding-top: 24px;
  margin-bottom: 32px;

  & > #profile-desc-flex {
    width: 100%;

    & #profile-desc {
      display: flex;
      justify-content: space-between;

      & > p {
        font-size: 14px;
        font-weight: 500;
        color: var(--gray-700);
        line-height: 20px;
      }
    }

    & > p {
      color: var(--gray-500);
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

import { styled } from 'styled-components';

export const NavWrapper = styled.nav`
  height: 60px;
  border-bottom: 1px solid var(--gray-iron-100);
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 4;
  padding: 0 40px;
  background-color: var(--light-gray);
`;

export const HMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  height: 100%;
  align-items: center;
`;

export const HMenuAvatar = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(/images/avatar.png);
`;

export const HUpgradeCtaWrapper = styled.li`
  height: 40px;
  min-width: 150px;
  border-radius: 8px;
  border: 1px solid var(--gray-300);
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-700);
  cursor: pointer;
  background: white;
`;

export const CtaWrapperContainer = styled.li`
  display: flex;
  gap: 4px;
`;

export const Cta = styled.div`
  background: white;
  border-radius: 6px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

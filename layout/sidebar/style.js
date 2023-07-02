import { styled } from 'styled-components';

export const SidebarWrapper = styled.aside`
  height: 100%;
  overflow: auto;
  background-color: white;
  border-right: 1px solid var(--gray-iron-100);
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  z-index: 2;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const SidebarInner = styled.div`
  height: 100%;
  border-right: var(--gray-200);
  display: flex;
  flex-direction: column;
`;

export const SidebarTop = styled.div`
  padding-top: 32px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 24px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

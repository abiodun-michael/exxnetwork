import { styled } from 'styled-components';

export const MenuWrapper = styled.ul`
  list-style: none;
  padding: 0 16px;
  margin-top: ${(props) => props.top}px;
`;

export const MenuItemWrapper = styled.li`
  & > .inner-link-layout {
    text-decoration: none;
    color: var(--gray-700);
  }
  & > .inner-link-layout {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 12px;
    min-height: 40px;
    margin-bottom: 4px;
    transition: background 300ms;
    border-radius: 6px;

    & > span {
      font-weight: 500;
      line-height: 24px;
      color: var(--gray-700);
    }
  }

  & > .active {
    background: var(--primary-50);

    & > span {
      color: var(--primary-700);
    }
  }
`;

export const SubMenuTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  border-radius: 6px;
  transition: background 300ms;
  background: ${(props) => (props.active ? 'var(--primary-50)' : '')};
  & > .inner-dropdown-layout {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
    line-height: 24px;
    color: ${(props) => (props.active ? 'var(--primary-700)' : 'var(--gray-700)')};
  }

  & > .chevron-wrapper-open {
    transform: rotate(180deg);
  }
`;

export const SubmenuWrapper = styled.ul`
  list-style: none;
  padding-left: 43px;
`;

export const SubMenuItemWrapper = styled.li`
  height: 40px;

  & > .submenu-link {
    height: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${(props) =>
      props.active === 'active' ? 'var(--primary-700)' : 'var(--gray-600)'};
  }
`;

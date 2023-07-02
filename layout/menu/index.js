const {
  MenuWrapper,
  MenuItemWrapper,
  SubmenuWrapper,
  SubMenuTop,
  SubMenuItemWrapper,
} = require('./style');
import { ChevronIcon } from 'icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Menu = ({ children }) => {
  return <MenuWrapper top="24">{children}</MenuWrapper>;
};

export default Menu;

export const Item = ({ label, icon: Icon, children, target = '#' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = useRouter().pathname;

  const rootPath = pathname.split('/')[1];

  const isPathActive = rootPath.toLocaleLowerCase() === label.toLocaleLowerCase();

  return (
    <MenuItemWrapper>
      {children ? (
        <SubMenuTop active={isPathActive ? 'active' : undefined}>
          <div className="inner-dropdown-layout">
            {Icon && (
              <Icon
                width={24}
                height={24}
                color={isPathActive ? 'var(--primary-500)' : 'var(--gray-500)'}
              />
            )}
            <span>{label}</span>
          </div>
          {children && (
            <div className={isOpen ? 'chevron-wrapper-open' : undefined}>
              <ChevronIcon
                width={20}
                height={20}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          )}
        </SubMenuTop>
      ) : (
        <Link href={target} legacyBehavior>
          <a className={`inner-link-layout ${isPathActive ? 'active' : ''}`}>
            <Icon
              width={24}
              height={24}
              color={isPathActive ? 'var(--primary-500)' : 'var(--gray-500)'}
            />
            <span>{label}</span>
          </a>
        </Link>
      )}

      {isOpen && children}
    </MenuItemWrapper>
  );
};

export const SubMenu = ({ children }) => {
  return <SubmenuWrapper>{children}</SubmenuWrapper>;
};

export const SubmenuItem = ({ label, target = '#' }) => {
  const pathname = useRouter().pathname;

  return (
    <SubMenuItemWrapper active={pathname === target && 'active'}>
      <Link href={target} legacyBehavior>
        <a className="submenu-link">
          <span>{label}</span>
        </a>
      </Link>
    </SubMenuItemWrapper>
  );
};

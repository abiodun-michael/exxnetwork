import {
  SidebarWrapper,
  SidebarInner,
  SidebarTop,
  Logo,
  MenuWrapper,
} from './style';
import { SearchInput } from 'components';
import Menu, { Item, SubMenu, SubmenuItem } from '../menu';
import {
  HomeIcon,
  BarchartIcon,
  LayersIcon,
  CheckdoneIcon,
  PiechartIcon,
  UsersIcon,
  LifebuoyIcon,
  SettingsIcon,
} from 'icons';
import Profile from '../profile';

// const {Item} = Menu
const Index = () => {
  return (
    <SidebarWrapper>
      <SidebarInner>
        <SidebarTop>
          <Logo src="/images/logo.png" />
          <SearchInput />
        </SidebarTop>
        <MenuWrapper>
          <Menu>
            <Item icon={HomeIcon} label="Home" target="/home" />
            <Item icon={BarchartIcon} label="Dashboard">
              <SubMenu>
                <SubmenuItem label="Sender" target="/dashboard/sender" />
                <SubmenuItem
                  label="Notifications"
                  target="/dashboard/notification"
                />
                <SubmenuItem label="Analytics" />
                <SubmenuItem label="Reports" />
              </SubMenu>
            </Item>
            <Item icon={LayersIcon} label="Projects" />
            <Item icon={CheckdoneIcon} label="Tasks">
              <SubMenu>
                <SubmenuItem label="To do" target="/tasks/to-do" />
                <SubmenuItem label="Updates" target="/tasks/updates" />
              </SubMenu>
            </Item>
            <Item icon={PiechartIcon} label="Reporting" />
            <Item icon={UsersIcon} label="Users" />
          </Menu>
          <Menu>
            <Item icon={LifebuoyIcon} label="Support" target="#" />
            <Item icon={SettingsIcon} label="Settings" target="#" />
            <Profile />
          </Menu>
        </MenuWrapper>
      </SidebarInner>
    </SidebarWrapper>
  );
};

export default Index;

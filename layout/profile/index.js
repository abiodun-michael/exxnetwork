import { ProfileWrapper, Avatar } from './style';
import { LogoutIcon } from 'icons';

const Index = () => {
  return (
    <ProfileWrapper>
      <Avatar src="/images/avatar.png" />
      <div id="profile-desc-flex">
        <div id="profile-desc">
          <p>Olivia Rhye</p>
          <LogoutIcon width={20} height={20} />
        </div>
        <p>olivia@untitledui.com</p>
      </div>
    </ProfileWrapper>
  );
};

export default Index;

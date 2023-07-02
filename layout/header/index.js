import {
  NavWrapper,
  HMenu,
  HMenuAvatar,
  HUpgradeCtaWrapper,
  CtaWrapperContainer,
  Cta,
} from './style';
import { BellIcon, Settings01Icon, ZapIcon } from 'icons';

const HUpgradeCta = () => {
  return (
    <HUpgradeCtaWrapper>
      <ZapIcon width={20} height={20} />
      <span>Upgrade now</span>
    </HUpgradeCtaWrapper>
  );
};

const HCta = () => {
  return (
    <CtaWrapperContainer>
      <Cta>
        <Settings01Icon width={20} height={20} />
      </Cta>
      <Cta>
        <BellIcon width={20} height={20} />
      </Cta>
    </CtaWrapperContainer>
  );
};

const Index = () => {
  return (
    <NavWrapper>
      <HMenu>
        <HUpgradeCta />
        <HCta />
        <HMenuAvatar />
      </HMenu>
    </NavWrapper>
  );
};

export default Index;

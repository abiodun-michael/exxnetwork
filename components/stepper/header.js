import {
  HeaderWrapper,
  HeaderContainer,
  HeaderItem,
  Circle,
  Dot,
  Label,
} from './style';
import { StepperContext } from './context';
import { useContext } from 'react';
import { TickIcon } from 'icons';
import PropTypes from 'prop-types';

const Item = ({ label, stepKey }) => {
  const { activeStep, completed } = useContext(StepperContext);

  const isDone = completed.includes(stepKey);

  const status = stepKey === activeStep || isDone ? 'active' : '';

  return (
    <HeaderItem className={isDone && 'done'}>
      <Circle status={status}>
        {!isDone ? <Dot status={status} /> : <TickIcon width={12} height={11} />}
      </Circle>
      <Label status={status}>{label}</Label>
    </HeaderItem>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  stepKey: PropTypes.string.isRequired,
};

export { Item };

const Header = ({ children }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>{children}</HeaderContainer>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Header;

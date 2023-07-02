import { SwitchWrapper, CheckboxEl, SwitchToggle } from './style';

const Switch = ({ ...rest }) => {
  return (
    <SwitchWrapper>
      <CheckboxEl type="checkbox" {...rest} />
      <SwitchToggle className="switch" />
    </SwitchWrapper>
  );
};

export default Switch;

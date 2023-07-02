import { ButtonEl } from './style';

const Button = ({ children, ...rest }) => {
  return <ButtonEl {...rest}>{children}</ButtonEl>;
};

export default Button;

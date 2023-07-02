import { CardWrapper, EffectImg } from './style';
import PropTypes from 'prop-types';

const Index = ({ children, ...rest }) => {
  return (
    <CardWrapper {...rest}>
      <EffectImg src="/images/card-effect.svg" />

      {children}
    </CardWrapper>
  );
};

Index.propTypes = {
  width: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  radius: PropTypes.string.isRequired,
};

Index.defaultProps = {
  width: '560px',
  padding: '40px',
  radius: '16px',
};

export default Index;

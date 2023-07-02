import { Children, useContext } from 'react';
import Header, { Item } from './header';
import { StepperWrapper } from './style';
import { StepperContext } from './context';
import PropTypes from 'prop-types';

const Index = ({ children }) => {
  const { activeStep } = useContext(StepperContext);

  return (
    <StepperWrapper>
      <Header>
        {Children.map(children, (child, i) => {
          return (
            child && (
              <Item
                key={i}
                label={child?.props?.label}
                stepKey={child?.props?.stepKey}
                isDone={child?.props?.isDone}
              />
            )
          );
        })}
      </Header>
      {Children.map(children, (child) => {
        const { stepKey } = child.props;
        return stepKey === activeStep && child;
      })}
    </StepperWrapper>
  );
};

Index.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Index;

import { createContext } from 'react';
import PropTypes from 'prop-types';

export const StepperContext = createContext();

const StepperContextProvider = ({ children, activeStep, completed }) => {
  return (
    <StepperContext.Provider value={{ activeStep, completed }}>
      {children}
    </StepperContext.Provider>
  );
};

StepperContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
  activeStep: PropTypes.string.isRequired,
  completed: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
};

StepperContextProvider.defaultProps = {
  children: <></>,
  activeStep: '',
  completed: [],
};

export default StepperContextProvider;

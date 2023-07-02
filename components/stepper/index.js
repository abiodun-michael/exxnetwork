import StepperContextProvider from './context';
import Content from './content';

const Index = ({ children, ...rest }) => {
  return (
    <StepperContextProvider {...{ ...rest }}>
      <Content>{children}</Content>
    </StepperContextProvider>
  );
};

Index.Pane = ({ children }) => {
  return children;
};

export default Index;

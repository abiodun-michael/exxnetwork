import { Stepper } from 'components';
import { useState } from 'react';
import Prepare from './prepare';
import SenderContextProvider from './context';
import Summary from './summary';

const { Pane } = Stepper;
const Index = () => {
  const [activeStep, setActiveStep] = useState('prepare');
  const [completedStep, setCompletedStep] = useState([]);
  const [data, setData] = useState({
    data: [],
    globalAmount: '',
  });
  const [userWallet, setUserWallet] = useState({
    tokenBalance: 0,
    bnbBalance: 0,
  });

  return (
    <SenderContextProvider
      {...{
        data,
        setData,
        activeStep,
        setActiveStep,
        setCompletedStep,
        completedStep,
        userWallet,
        setUserWallet,
      }}>
      <Stepper activeStep={activeStep} completed={completedStep}>
        <Pane label="Prepare" stepKey="prepare" isDone={true}>
          <Prepare />
        </Pane>
        <Pane label="Summary" stepKey="summary" isDone={true}>
          <Summary />
        </Pane>
      </Stepper>
    </SenderContextProvider>
  );
};

export default Index;

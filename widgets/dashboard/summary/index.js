import { Card, Button } from 'components';
import { Title } from '../style';
import { SenderContext } from '../context';
import { useContext } from 'react';
import Wallet from './wallet';
import Recipients from './recipient';
import { BtnGroupWrapper } from './style';
import { toast } from 'react-hot-toast';

const Summary = () => {
  const { data,setData, setActiveStep, completedStep, setCompletedStep } =
    useContext(SenderContext);

  const handleGoBack = () => {
    setActiveStep('prepare');
    const arr = [...completedStep];
    const index = arr.findIndex((el) => el === 'summary');
    if (index > -1) {
      arr.splice(index, 1);
      setCompletedStep(arr);
    }
  };

  const handleSend = ()=>{
    setCompletedStep([...new Set([...completedStep, 'summary'])]);
    setActiveStep('summary');

    toast.success(
      <div>
        <p className="title">Successfully sent token</p>
        <p className="desc">
          Your token has been successfully sent to all addresses
        </p>
      </div>,
    )
  }

  return (
    <Card>
      <Title>Sender</Title>
      <Wallet rawData={data} />
      <Recipients rawData={data} />
      <BtnGroupWrapper>
        <Button variant="ghost" width={224} onClick={handleGoBack}>
          Go back
        </Button>
        <Button
          width={224}
          onClick={handleSend}>
          Proceed
        </Button>
      </BtnGroupWrapper>
    </Card>
  );
};

export default Summary;

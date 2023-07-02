import { Card, Input, MagicTextArea } from 'components';
import { Title } from './style';
import { SenderContext } from './context';
import { useContext } from 'react';

const Prepare = () => {
  const { data, completedStep, setData, setActiveStep, setCompletedStep } =
    useContext(SenderContext);

  const handleOnDone = (e) => {
    setData({ data: e.data, globalAmount: e.globalAmount });
    setCompletedStep([...completedStep, 'prepare']);
    setActiveStep('summary');
  };

  return (
    <Card>
      <Title>Sender</Title>
      <Input />
      <MagicTextArea defaultData={{ ...data }} onDone={handleOnDone} />
    </Card>
  );
};

export default Prepare;

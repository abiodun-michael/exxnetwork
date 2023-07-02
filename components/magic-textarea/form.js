import { InputEl, InputWrapper } from './style';
import Divider from '../divider';
import { Label } from '../form/input/style';
import Switch from '../form/switch';
import { useState, useContext } from 'react';
import { MagicTextareaContext } from './context';
import Uploader from './uploader';

const Form = () => {
  const [isChecked, setIsCheck] = useState(false);
  const { amount, setAmount } = useContext(MagicTextareaContext);

  return (
    <InputWrapper>
      <Uploader />
      <Divider h={15} />
      <Label
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <span>*Enter same amount for all addresses</span>
        <Switch checked={isChecked} onChange={(e) => setIsCheck(e.target.checked)} />
      </Label>
      {isChecked && (
        <InputEl
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      )}
    </InputWrapper>
  );
};

export default Form;

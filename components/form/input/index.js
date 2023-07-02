import { InputEl, InputWrapper, Label } from './style';

const Input = () => {
  return (
    <InputWrapper>
      <Label>Enter Address</Label>
      <InputEl placeholder="Enter address here" />
    </InputWrapper>
  );
};

export default Input;

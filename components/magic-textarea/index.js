import MagicTextareaContextProvider from './context';
import { MagicInputWrapper } from './style';
import LineNumber from './line-number';
import { Label } from '../form/input/style';
import TextArea from './textarea';
import CtaGroup from './cta-group';

const Index = ({ ...rest }) => {
  return (
    <MagicTextareaContextProvider {...rest}>
      <Label style={{ marginTop: 24 }}>List Addresses in CSV</Label>
      <MagicInputWrapper>
        <LineNumber />
        <TextArea />
      </MagicInputWrapper>
      <CtaGroup />
    </MagicTextareaContextProvider>
  );
};

export default Index;

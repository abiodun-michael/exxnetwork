import Button from '../form/button';
import { CtaGroupWrapper, BtnGroupWrapper } from './style';
import { LoaderIcon } from 'icons';
import { useContext } from 'react';
import { MagicTextareaContext } from './context';
import Form from './form';
import Divider from '../divider';
import Error from './error';

const CtaGroup = () => {
  const { errors, handleError, handleDone, loading, isDone } =
    useContext(MagicTextareaContext);

  return (
    <CtaGroupWrapper>
      {errors?.length === 0 ? <Form /> : <Error />}
      <Divider h={32} />
      {!isDone && (
        <Button
          style={{ display: 'flex', gap: 12, justifyContent: 'center' }}
          onClick={handleError}>
          {loading && <LoaderIcon width={19} height={20} />}
          <span>{loading ? 'Checking for possible error' : 'Proceed'}</span>
        </Button>
      )}

      {isDone && <BtnGroup onProceed={handleDone} />}
    </CtaGroupWrapper>
  );
};

export default CtaGroup;

const BtnGroup = ({ onProceed = () => {}, onMerge = () => {} }) => {
  return (
    <BtnGroupWrapper>
      <Button variant="ghost" width={224} onClick={onMerge}>
        Merge
      </Button>
      <Button width={224} onClick={onProceed}>
        Proceed
      </Button>
    </BtnGroupWrapper>
  );
};

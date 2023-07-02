import { LineNumberWrapper } from './style';
import { useContext } from 'react';
import { MagicTextareaContext } from './context';

const LineNumber = () => {
  const { data } = useContext(MagicTextareaContext);

  return (
    <LineNumberWrapper>
      {Array.from(Array(data?.length).keys()).map((k, i) => (
        <span key={k}>{i + 1}</span>
      ))}
    </LineNumberWrapper>
  );
};

export default LineNumber;

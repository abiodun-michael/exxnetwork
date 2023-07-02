import { ErrorWrapper } from './style';
import { useContext } from 'react';
import { MagicTextareaContext } from './context';

const Error = () => {
  const { errors } = useContext(MagicTextareaContext);

  const handleGotoLine = (id) => {
    const el = document.getElementById(id);
    el.focus();
  };

  return (
    <>
      {errors.length > 0 && (
        <ErrorWrapper>
          {errors?.map(({ line, id, type, address }) => (
            <p key={id}>
              Line {line + 1}:{' '}
              {type === 'invalid_address'
                ? `Inaccurate address ${address}`
                : 'Invalid amount'}{' '}
              <span onClick={() => handleGotoLine(id)}> Go to line {line + 1}</span>
            </p>
          ))}
        </ErrorWrapper>
      )}
    </>
  );
};

export default Error;

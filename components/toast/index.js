import { ToastWrapper, IconWrapper, CloseWrapper } from './style';
import { SuccessIcon, XIcon } from 'icons';
import { resolveValue } from 'react-hot-toast';

const MyToast = ({ data = {} }) => {
  const { message, type } = data;
  console.log(data);
  return (
    <ToastWrapper>
      {type == 'success' ? (
        <IconWrapper>
          <SuccessIcon width={19} height={22} />
        </IconWrapper>
      ) : null}
      {resolveValue(data.message, data)}
      <CloseWrapper>
        <XIcon width={36} height={36} />
      </CloseWrapper>
    </ToastWrapper>
  );
};

export default MyToast;

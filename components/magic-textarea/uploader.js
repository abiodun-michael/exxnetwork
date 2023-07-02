import { UploaderWrapper, CSVBtn } from './style';
import { AvatarAddIcon } from 'icons';

const Uploader = () => {
  return (
    <UploaderWrapper>
      <CSVBtn>Show sample CSV</CSVBtn>
      <CSVBtn>
        <AvatarAddIcon width={24} height={24} /> <span>Upload CSV</span>
      </CSVBtn>
    </UploaderWrapper>
  );
};

export default Uploader;

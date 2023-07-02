import { ExpandCta, TextareaWrapper } from './style';
import { ExpandIcon } from 'icons';
import Editable from './editable';
import { useRef } from 'react';

const Textarea = () => {
  const ref = useRef(null);

  const handleToggleFullScreen = () => {
    if (ref.current.requestFullscreen) {
      ref.current.requestFullscreen();
    }

    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  return (
    <TextareaWrapper ref={ref}>
      <ExpandCta onClick={handleToggleFullScreen}>
        <ExpandIcon />
      </ExpandCta>
      <Editable />
    </TextareaWrapper>
  );
};

export default Textarea;

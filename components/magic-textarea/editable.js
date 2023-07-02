import { EditableEl, EditableWrapper } from './style';
import { useCallback, useContext, useEffect, useId, useRef } from 'react';
import { MagicTextareaContext } from './context';

const Item = ({ data, id, error }) => {
  const ref = useRef();

  const { handDataChange, addLine, errors, handDataPaste } =
    useContext(MagicTextareaContext);

  const handleChange = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const nid = Date.now();
      addLine(nid, id);
      setTimeout(() => {
        ref.current.nextSibling.focus();
      }, 100);
    } else {
      setTimeout(() => {
        handDataChange(e.target.innerText, id, e);
      }, 100);
    }
  };

  const handleError = () => {
    const index = errors?.findIndex((el) => el.id == id);
    if (index > -1) {
      return true;
    }
    return false;
  };

  const handleOnUpdate = useCallback(() => {
    if (!id) {
      const nid = Date.now();
      addLine(nid, null);
    } else {
      ref.current.innerText = data;
    }
  }, [data]);

  const handleOnPasteEvent = (e) => {
    let paste = e.clipboardData.getData('text');
    handDataPaste(paste, id);
  };

  useEffect(() => {
    handleOnUpdate();
  }, []);

  return (
    <EditableEl
      ref={ref}
      aria-autocomplete="list"
      role="textbox"
      id={id}
      className={handleError() ? 'error' : undefined}
      contentEditable="true"
      onKeyDown={handleChange}
      onPaste={handleOnPasteEvent}
    />
  );
};

const Editable = () => {
  const { data, error } = useContext(MagicTextareaContext);

  return (
    <EditableWrapper>
      {data.length > 0 ? (
        data?.map(({ data, id }, i) => <Item key={id} data={data} id={id} />)
      ) : (
        <Item />
      )}
    </EditableWrapper>
  );
};

export default Editable;

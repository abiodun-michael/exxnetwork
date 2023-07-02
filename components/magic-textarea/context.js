import { createContext, useState, useEffect } from 'react';

export const MagicTextareaContext = createContext();

const MagicTextareaContextProvider = ({
  defaultData = {},
  children,
  onDone = () => {},
}) => {
  const [data, setData] = useState([]);

  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const [errors, setErrors] = useState([]);

  const handDataChange = (value, id, key) => {
    let arr = [...data];
    const index = arr.findIndex((el) => el.id === id);

    if (isDone) {
      setIsDone(false);
    }

    if (index > -1) {
      if (key.keyCode == 8 && arr[index].data == '') {
        handleRemoveLine(id);
        if (key.target.previousSibling) {
          key.target.previousSibling.focus();
        }
      } else {
        arr[index].data = value;
        setData(arr);
      }
    }
  };
  const handDataPaste = (value, id) => {
    let arr = [...data];
    const index = arr.findIndex((el) => el.id === id);
    setIsDone(false);
    if (index > -1) {
      arr[index].data = value;
      setData(arr);
    }
  };

  const addLine = (id, prevId) => {
    const arr = [...data];

    if (prevId) {
      const prevIndex = arr.findIndex((el) => el.id == prevId);
      arr.splice(prevIndex + 1, 0, { id, data: '' });
      setData(arr);
    } else {
      setData([...data, { id, data: '' }]);
    }
  };

  const handleRemoveLine = (id) => {
    let arr = [...data];
    const index = arr.findIndex((el) => el.id === id);

    if (index > -1) {
      arr.splice(index, 1);
      setData(arr);
    }
  };

  const handleError = () => {
      const arr = [];

      const regex = /^([a-zA-Z0-9]){40}$/;

      data.forEach(({ id, data }, i) => {
        const splittedData = data.split(',');
        let result = {
          id,
          line: i,
          address: splittedData[0],
        };

        const isAddressOkay = regex.test(splittedData[0]);

        if (!isAddressOkay) {
          result.type = 'invalid_address';
          arr.push(result);
        } else if (
          splittedData[1] == undefined ||
          splittedData[1] == '' ||
          isNaN(splittedData[1].trim())
        ) {
          result.type = 'invalid_amount';
          arr.push(result);
        } else {
          const index = arr.findIndex((el) => el.id === id);
          if (index > -1) {
            arr.splice(index, 1);
          }
        }
      });

      if (arr.length > 0) {
        setErrors(arr);
      } else {
        setErrors([]);
        setIsDone(true);
      }
   
  };

  const handleDone = () => {
    onDone({
      globalAmount: amount,
      data,
    });
  };

  useEffect(() => {
    if (defaultData.data.length > 0) {
      setData(defaultData.data);
    }
    if (defaultData.globalAmount) {
      setAmount(defaultData.globalAmount);
    }
  }, []);

  return (
    <MagicTextareaContext.Provider
      value={{
        data,
        errors,
        handDataChange,
        handleDone,
        amount,
        loading,
        isDone,
        setIsDone,
        setAmount,
        addLine,
        handleRemoveLine,
        handleError,
        handDataPaste,
      }}>
      {children}
    </MagicTextareaContext.Provider>
  );
};

export default MagicTextareaContextProvider;

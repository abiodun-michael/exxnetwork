import { useEffect, useState } from 'react';
import {
  RecipientItemWrapper,
  RecipientWrapper,
  RecipientSectionTitle,
} from './style';

const Recipients = ({ rawData = {} }) => {
  const [parsedData, setParsedData] = useState([]);

  const { data = [], globalAmount } = rawData;

  const parseData = () => {
    const arr = [];

    data.forEach((item) => {
      const splittedData = item.data.split(',');
      const obj = {
        token: splittedData[0],
      };
      if (globalAmount) {
        obj.amount = parseInt(globalAmount);
      } else {
        obj.amount = parseInt(splittedData[1].trim());
      }
      arr.push(obj);
    });

    setParsedData(arr);
  };

  useEffect(() => {
    parseData();
  }, [rawData]);

  return (
    <>
      <RecipientSectionTitle>List of recipients</RecipientSectionTitle>

      <RecipientWrapper>
        {parsedData?.map((item, i) => (
          <Item {...item} key={i} />
        ))}
      </RecipientWrapper>
    </>
  );
};

export default Recipients;

const Item = ({ token, amount }) => {
  return (
    <RecipientItemWrapper>
      <p>{token}</p>
      <span>{amount.toLocaleString()}</span>
    </RecipientItemWrapper>
  );
};

import { useContext, useEffect, useState } from 'react';
import { WalletWrapper, BalanceWrapper, Info } from './style';
import { AlertTriangleIcon } from 'icons';
import { SenderContext } from '../context';

const Wallet = ({ rawData = {} }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const { userWallet, setUserWallet } = useContext(SenderContext);

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

    const total = arr.reduce((acc, it) => {
      return acc + it.amount;
    }, 0);

    setTotalAmount(total);
  };

  useEffect(() => {
    parseData();
  }, [rawData]);

  return (
    <>
      <WalletWrapper>
        <p>Total number of token to send</p>
        <h5>{totalAmount.toLocaleString()} BNB</h5>
      </WalletWrapper>
      <BalanceWrapper>
        <p>
          Token Balance <span>{userWallet?.tokenBalance.toLocaleString()} BNB</span>
        </p>
        <p>
          BNB Balance <span>{userWallet?.bnbBalance.toLocaleString()} BNB</span>
        </p>
      </BalanceWrapper>

      {userWallet.tokenBalance < totalAmount && (
        <Info>
          <AlertTriangleIcon width={20} height={20} />
          <p>
            Not enough token in your wallet{' '}
            <span
              onClick={() =>
                setUserWallet({
                  tokenBalance: 76836767,
                  bnbBalance: 748975748,
                })
              }>
              Add funds
            </span>
          </p>
        </Info>
      )}
    </>
  );
};

export default Wallet;

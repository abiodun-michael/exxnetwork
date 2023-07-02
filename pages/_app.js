import React from 'react';
import 'normalize.css';
import '../public/css/global.css';
import { Toaster } from 'react-hot-toast';
import { MyToast } from 'components';

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Toaster position="top-right">{(t) => <MyToast data={t} />}</Toaster>;
      <Component {...pageProps} />
    </>,
  );
};

export default App;

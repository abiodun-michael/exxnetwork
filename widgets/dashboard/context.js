import { createContext } from 'react';

export const SenderContext = createContext();

const SenderContextProvider = ({ children, ...rest }) => {
  return (
    <SenderContext.Provider value={{ ...rest }}>{children}</SenderContext.Provider>
  );
};

export default SenderContextProvider;

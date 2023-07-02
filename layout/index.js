import { Page } from './style';
import Sidebar from './sidebar';
import Main from './main';
import Header from './header';

const Index = ({ children }) => {
  return (
    <Page>
      <Sidebar />
      <Main>
        <Header />
        {children}
      </Main>
    </Page>
  );
};

export default Index;

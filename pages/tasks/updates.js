import Layout from 'layout';

const Index = () => {
  return <h1>Updates</h1>;
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;

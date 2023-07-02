import { Stepper, Card } from 'components';
import Layout from 'layout';
import { useState } from 'react';
import DashboardSender from 'widgets/dashboard';

const Index = () => {
  return <DashboardSender />;
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;

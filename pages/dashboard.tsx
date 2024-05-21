import type { NextPage } from 'next';
import Head from 'next/head';
import Dashboard from '../components/Dashboard';

const DashboardPage: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Dashboard - My Lamp AI</title>
      </Head>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;

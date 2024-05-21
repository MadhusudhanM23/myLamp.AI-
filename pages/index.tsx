import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home
: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Home - My Lamp AI</title>
      </Head>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to My Lamp AI</h1>
        <p className="mt-2">Your AI-powered lighting solution.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

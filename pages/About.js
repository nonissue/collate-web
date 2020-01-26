import React from 'react';
import Head from 'next/head';

import Nav from '../components/Nav';

const about = () => {
  return (
    <div>
      <Head>
        <title>Collate - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div>About!</div>
    </div>
  );
};

export default about;

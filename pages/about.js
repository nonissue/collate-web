import React from 'react';
import Head from 'next/head';
import styles from './about.module.css';

import { Nav } from '../components/Nav';

const about = () => {
  return (
    <div>
      <Head>
        <title>Collate - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className={styles.wrapper}>
        A project by <a href="https://nonissue.org">Andy Williams</a>.
      </div>
    </div>
  );
};

export default about;

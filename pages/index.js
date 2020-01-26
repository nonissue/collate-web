import React from 'react';
import Head from 'next/head';
import { Nav } from '../components/Nav';
import Songs from './songlist';

const link = `
  color: 'hsla(205.9, 85.3%, 40%, 1)';
  text-decoration: none;
`;

const themes = {
  light: {
    background: '#ffffff',
    foreground: '#191b24',
    text: '#191b24',
    font: `'Work Sans', 'Helvetica Neue', 'Helvetica', Arial, sans-serif`,
    link,
    fonts: {
      body: `'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      mono: `'Lekton', Monaco, 'Lucida Console',  monospace`,
      header: `'Bebas Neue', 'Work Sans', Helvetica, sans-serif`,
      alt: `'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    },
  },
  dark: {
    background: '#333333',
  },
};

const Home = () => (
  <div>
    <Head>
      <title>Collate Music</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <Songs />
  </div>
);

export default Home;

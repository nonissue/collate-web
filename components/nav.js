import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => (
  <>
    <nav className={styles.nav}>
      <ul>
        <li className={styles.logo}>
          <Link href="/">
            <a>Collate Music</a>
          </Link>
        </li>
        <li>
          <Link href="/songs">
            <a>About</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
      `}</style>
    </nav>
  </>
);

export default Nav;

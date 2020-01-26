import React from 'react';
import Link from 'next/link';
import styles from './Song.module.css';

const Song = ({ title, artist, album, id }) => (
  <div className={styles.wrapper}>
    <Link href={`/songs/${id}`} as={`/songs/${id}`}>
      <a>
        <div className={styles.item}>
          <div>
            <div className={styles.artist}>{artist}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.album}>{album}</div>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default Song;

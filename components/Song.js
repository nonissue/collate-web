import React from 'react';
import styles from './Song.module.css';

const Song = ({ title, artist, album }) => (
  <div className={styles.item}>
    <div>
      <div className={styles.artist}>{artist}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.album}>{album}</div>
    </div>
  </div>
);

export default Song;

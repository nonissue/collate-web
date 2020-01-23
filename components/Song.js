import React from 'react';
import styles from './Song.module.css';

const Song = ({ title, artist, album }) => (
  <div className={styles.item}>
    <div>
      {artist} <br /> {title} <br /> {album}
    </div>
  </div>
);

export default Song;

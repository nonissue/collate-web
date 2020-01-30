import React from 'react';
import { useRouter } from 'next/router';
import { songs } from '../../mocks/songs';

import styles from './index.module.css';
import { List } from '../../components/List';
import { Nav } from '../../components/Nav';

export default function Song() {
  const router = useRouter();

  const currentSong = songs.find(s => s.id === router.query.id);

  if (!currentSong) {
    return (
      <div>
        <Nav />
        <div className={styles.page}>
          <List />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className={styles.page}>
        {currentSong && currentSong.title}
        <p>This is the song content!</p>
      </div>
    </div>
  );
}

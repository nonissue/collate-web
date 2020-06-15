import React from 'react';
import { useRouter } from 'next/router';
import { songs } from '../../mocks/songs';

import styles from './index.module.css';
import { List } from '../../components/List';
import { Nav } from '../../components/Nav';
import { SongPage } from '../../components/SongPage';

export default function Song() {
  const router = useRouter();

  const currentSong = songs.find(s => s.id === router.query.id);

  if (!currentSong) {
    return (
      <div>
        <Nav />
        <div className={styles.wrapper}>
          <List />
        </div>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className={styles.wrapper}>
        {currentSong && (
          <SongPage
            id={currentSong.id}
            title={currentSong.title}
            artist={currentSong.artist}
            tags={currentSong.tags}
            genre={currentSong.genre}
            album={currentSong.album}
          />
        )}
      </div>
    </>
  );
}

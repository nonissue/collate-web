import React from 'react';
import { useRouter } from 'next/router';
import { songs } from '../../mocks/songs';
import { slugify } from '../../lib/slugify';

import styles from './index.module.css';
import { Nav } from '../../components/Nav';
import { SongPage } from '../../components/SongPage';

export default function Song() {
  const router = useRouter();

  const currentSong = songs.find(s => slugify(s.title) === router.query.id);

  return (
    <div>
      <Nav />

      <div className={styles.page}>
        {currentSong && (
          <SongPage
            id={currentSong.id} // @audit id not used
            title={currentSong.title}
            artist={currentSong.artist}
            tags={currentSong.tags}
            genre={currentSong.genre}
            album={currentSong.album}
          />
        )}
      </div>
    </div>
  );
}

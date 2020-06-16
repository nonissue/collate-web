import React from 'react';
import { useRouter } from 'next/router';
import { songs } from '../../mocks/songs';

import styles from './songs.module.css';
import Songs from '../songlist';
import { Nav } from '../../components/Nav';
import { SongPage } from '../../components/SongPage';
import { slugify } from '../../lib/slugify';

export default function Song() {
  const router = useRouter();
  const slug = router.query.id || [];
  const currentSong = songs.find(s => slugify(s.id) === slug);
  // Currentsong should never match at this route?

  if (!currentSong) {
    return (
      <div>
        <Nav />
        <Songs />
        <div className={styles.wrapper}>wat</div>
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

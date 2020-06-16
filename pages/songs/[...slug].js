import React from 'react';
import { useRouter } from 'next/router';
import { songs } from '../../mocks/songs';
import { slugify } from '../../lib/slugify';

import styles from './songs.module.css';
import { Nav } from '../../components/Nav';
import Songs from '../songlist';
import { SongPage } from '../../components/SongPage';

/*
Ideally, we would handle this without the index.js fail, and a catch all route that 
renders the song list when '/songs' is the route, and the specific song when
'/songs/song-title' is the route. Next.js indicates optional catch all routes ([[...slug]].js)
are experimental thought
*/

export default function Song() {
  const router = useRouter();
  const slug = router.query.slug || [];
  const currentSong = songs.find(s => slugify(s.title) === slug[0]);

  console.log(router.query);

  // If no slug (eg. '/songs/song-name`), render the song list
  if (!router.query.slug) {
    return (
      <div>
        <Nav />
        <Songs />
      </div>
    );
  }

  // If slug is specified but goes unmatched, render 404
  if (!currentSong) {
    return (
      <div>
        <Nav />

        <div className={styles.wrapper}>
          <div className={styles.error}>
            <b>Error 404:</b> {`Song ${slug} not found`}
          </div>
        </div>
        <Songs />
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className={styles.wrapper}>
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
    </>
  );
}

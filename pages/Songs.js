import React from 'react';
import styles from './Songs.module.css';
import Song from '../components/Song';
import Nav from '../components/Nav';
import { songs } from '../mocks/songs';

const Songs = () => {
  const shortList = songs.slice(0, 11);

  return (
    <div>
      <Nav />

      <div className={styles.songs}>
        <h1>Songs</h1>
        <h3>Sort by: (popular) (date)</h3>
        <h3>Tags: (taglist)</h3>
        <h3>View: (grid) (list)</h3>
        <div className={styles.grid}>
          {shortList.map(song => (
            <Song key={song.id} artist={song.artist.first} album={song.album} title={song.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;

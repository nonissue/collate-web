import React from 'react';
import styles from './Songs.module.css';
import Song from '../components/Song';
import Nav from '../components/Nav';
import { songs } from '../mocks/songs';

/* for select:
select with inline label
https://polaris.shopify.com/components/forms/select#navigation
https://codesandbox.io/s/polaris-inline-select-ze3ho
*/

const Songs = () => {
  const shortList = songs.slice(0, 11);

  return (
    <div>
      {/* <Nav /> */}

      <div className={styles.songs}>
        {/* <h1>Songs</h1> */}
        <div className={styles.controls}>
          <div className={styles.control}>
            <span>Sort by:</span>
            <select>
              <option>popular</option>
              <option>date</option>
            </select>
          </div>
          {/* <h3>Tags: (taglist)</h3> */}
          <div className={styles.control}>
            <span>View:</span>
            <select>
              <option>grid</option>
              <option>list</option>
            </select>
          </div>
        </div>
        <div className={`${styles.grid} ${styles.stack}`}>
          <div className={styles.stackException}>Exception but not applied</div>
          <div>No Exception</div>
          <div className={styles.stackException}>Exception</div>
          {shortList.map(song => (
            <Song key={song.id} artist={song.artist.first} album={song.album} title={song.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;

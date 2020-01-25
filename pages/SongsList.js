import React from 'react';
import styles from './Songs.module.css';
import Song from '../components/Song';
import Select from '../components/Select';
import { songs } from '../mocks/songs';
import SelectIcon from '../assets/select_minor.svg';

/* for select:
select with inline label
https://polaris.shopify.com/components/forms/select#navigation
https://codesandbox.io/s/polaris-inline-select-ze3ho
*/

/*
Select:

- Div: Select Wrapper
  - Select: Select with options (hidden)
  - Div: Select Display Content
    - Span: Label
    - Span: Selected Option
    - Span: Icon


*/

const testOpts = [
  { value: 'date', label: 'Date' },
  { value: 'popular', label: 'Popular' },
];

const testOpts2 = [
  { value: 'grid', label: 'Grid' },
  { value: 'list', label: 'List' },
];

const Songs = () => {
  const shortList = songs.slice(0, 11);

  return (
    <div>
      <div className={styles.songs}>
        <div className={styles.controls}>
          <Select options={testOpts} label="Sort by" />
          <Select options={testOpts2} label="View mode" />
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

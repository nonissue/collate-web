import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Song.module.css';
import { slugify } from '../lib/slugify';

const Song = ({ title, artist, album, id }) => (
  <div className={styles.wrapper}>
    {/* TODO:  Is this the best way to ling to the song? 
    or should be route to /songs/slug directly? 
    
    Note: `/song?id=${id} seems faster in devolopment
    Update: ALSO faster in production, dunno why
    */}
    <Link href={`/songs?id=${id}`} as={`/songs/${slugify(title)}`}>
      {/* <Link href={`/songs/[${slugify(title)}]`} as={`/songs/${slugify(title)}`}> */}
      <a>
        <div className={styles.item}>
          <div>
            <div className={styles.artist}>{artist}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.album}>{album}</div>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

Song.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Song;

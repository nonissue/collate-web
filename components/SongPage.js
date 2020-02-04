import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { ArrowRightMinor, ArrowLeftMinor } from '@shopify/polaris-icons';
import styles from './SongPage.module.css';
import { songs } from '../mocks/songs';
import { slugify } from '../lib/slugify';

export const SongPage = ({ id, title, artist, album, tags, genre }) => {
  const index = songs.findIndex(s => s.id === id);
  const next = songs[index + 1];
  const prev = songs[index - 1];
  console.log(index);
  console.log(id);

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.artist}>
          {artist.first} {artist.last}
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.album}>{album}</div>
        {/* <div className={styles.tags}>{tags.map(t => `${t} `)}</div> */}
        {/* <div className={styles.genre}>{genre}</div> */}
      </div>
      <div className={styles.nextprev}>
        <div className={styles['nextprev-button']}>
          {prev && (
            <Link href={`/songs?id=${prev.id}`} as={`/songs/${slugify(prev.title)}`}>
              <a>
                <ArrowLeftMinor viewBox="0 0 20 20" />
              </a>
            </Link>
          )}
          <div className={styles.backdrop} />
        </div>
        <div className={styles['nextprev-button']}>
          {next && (
            <Link href={`/songs?id=${next.id}`} as={`/songs/${slugify(next.title)}`}>
              <a>
                <ArrowRightMinor viewBox="0 0 20 20" />
              </a>
            </Link>
          )}
          <div className={styles.backdrop} />
        </div>
      </div>
    </div>
  );
};

SongPage.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
  }).isRequired,
  album: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  genre: PropTypes.string.isRequired,
};

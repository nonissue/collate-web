import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  ArrowRightMinor,
  ArrowLeftMinor,
  PlayCircleMajorMonotone,
  PauseCircleMajorMonotone,
  PaginationStartMinor,
  PaginationEndMinor,
} from '@shopify/polaris-icons';
import styles from './SongPage.module.css';
import { songs } from '../mocks/songs';
import { slugify } from '../lib/slugify';

// eslint-disable-next-line no-unused-vars
export const SongPage = ({ id, title, artist, album, tags, genre }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const index = songs.findIndex(s => s.id === id);
  const next = songs[index + 1];
  const prev = songs[index - 1];

  return (
    <div className={styles.wrapper}>
      <div className={styles.metadata}>
        <div className={styles.title}>{title}</div>
        <div className={styles.artistalbum}>
          <div className={styles.artist}>
            {artist.first} {artist.last}
          </div>
          &nbsp;—&nbsp;
          <div className={styles.album}>{album}</div>
        </div>

        {/* <div className={styles.tags}>{tags.map(t => `${t} `)}</div> */}
        {/* <div className={styles.genre}>{genre}</div> */}
      </div>
      <div className={`${styles.controls} ${styles.nextprev}`}>
        <div className={styles['controls-playback']}>
          <div className={styles['controls-button']}>
            <a href="#" role="button" onClick={() => setIsPlaying(!isPlaying)}>
              <PaginationStartMinor viewBox="0 0 20 20" />
            </a>
            <div className={styles.backdrop} />
          </div>
          <div className={styles['controls-button']}>
            <a href="#" role="button" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <PauseCircleMajorMonotone viewBox="0 0 20 20" />
              ) : (
                <PlayCircleMajorMonotone viewBox="0 0 20 20" />
              )}
            </a>
            <div className={styles.backdrop} />
          </div>
          <div className={styles['controls-button']}>
            <a href="#" role="button" onClick={() => setIsPlaying(!isPlaying)}>
              <PaginationEndMinor viewBox="0 0 20 20" />
            </a>
            <div className={styles.backdrop} />
          </div>
        </div>
        <div className={styles['controls-nav']}>
          {prev ? (
            <div className={styles['controls-button']}>
              <Link href={`/songs?id=${prev.id}`} as={`/songs/${slugify(prev.title)}`}>
                <a>
                  <ArrowLeftMinor viewBox="0 0 20 20" />
                </a>
              </Link>

              <div className={styles.backdrop} />
            </div>
          ) : (
            <div className={`${styles['controls-button']} ${styles['controls-disabled']}`}>
              <a>
                <ArrowLeftMinor viewBox="0 0 20 20" />
              </a>
            </div>
          )}
          {next ? (
            <div className={styles['controls-button']}>
              <Link href={`/songs?id=${next.id}`} as={`/songs/${slugify(next.title)}`}>
                <a>
                  <ArrowRightMinor viewBox="0 0 20 20" />
                </a>
              </Link>

              <div className={styles.backdrop} />
            </div>
          ) : (
            <div className={`${styles['controls-button']} ${styles['controls-disabled']}`}>
              <a>
                <ArrowRightMinor viewBox="0 0 20 20" />
              </a>
            </div>
          )}
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

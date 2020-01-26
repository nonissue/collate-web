import React from 'react';
import Link from 'next/link';
import styles from './Song.module.css';

function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

const Song = ({ title, artist, album, id }) => (
  <div className={styles.wrapper}>
    {/* <Link href={`/songs/?id=$${id}`} as={`/songs/${id}`}> */}
    <Link href={`/songs?id=${id}`} as={`/songs/${slugify(title)}`}>
      {/* <Link href={`/songs/[${id}]`} as={`/songs/${id}`}> */}
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

export default Song;

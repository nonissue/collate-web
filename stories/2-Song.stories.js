import React from 'react';
import { songs } from '../mocks/songs';

import Song from '../components/Song';

const demoSong = songs[0];

export default { title: 'Song' };

export const SongDefault = () => (
  <Song
    artist={demoSong.artist.first}
    album={demoSong.album}
    title={demoSong.title}
    id={demoSong.id}
  />
);

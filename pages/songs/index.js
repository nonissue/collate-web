import React from 'react';
import { songs } from '../../mocks/songs';

const songsindex = () => {
  const titles = songs.map(s => s.title);

  return (
    <div>
      <h1>Songs!</h1>
      <ul>
        {titles.map(title => (
          <li>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default songsindex;

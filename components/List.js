import React from 'react';
import { songs } from '../mocks/songs';

export const List = () => {
  const titles = songs.map(s => s.title);

  return (
    <div>
      <h1>Songs</h1>
      <ul>
        {titles.map(title => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

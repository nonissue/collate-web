import React from 'react';
import { useRouter } from 'next/router';
import { songs } from '../../mocks/songs';
import { List } from '../../components/List';

export default function Song() {
  const router = useRouter();

  const currentSong = songs.find(s => s.id === router.query.id);

  if (!currentSong) {
    return <List />;
    // return <div>Test</div>;
  }

  return (
    <div>
      {currentSong && currentSong.title}
      <p>This is the song content.</p>
    </div>
  );
}

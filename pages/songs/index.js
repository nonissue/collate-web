import React from 'react';
import { useRouter } from 'next/router';
import { songs } from '../../mocks/songs';

export default function Song() {
  const router = useRouter();

  const currentSong = songs.find(s => s.id === router.query.id);

  return (
    <div>
      {currentSong && currentSong.title}
      <p>This is the song content.</p>
    </div>
  );
}

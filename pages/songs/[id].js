import React from 'react';
import { useRouter } from 'next/router';
import { songs } from '../../mocks/songs';
import { slugify } from '../../lib/slugify';

export default function SongPage() {
  const router = useRouter();

  const currentSong = songs.find(s => slugify(s.title) === router.query.id);

  return (
    <div>
      {currentSong && currentSong.title}
      <p>This is the song content.</p>
    </div>
  );
}

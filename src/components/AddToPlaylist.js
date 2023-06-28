import { useState } from 'react';
import FakeData from '../mock/FakeData.json';

const useSongs = () => {
  const [songs, setSongs] = useState(FakeData);
  return songs;
};

let songMock = {
  name: '',
  artist: '',
  year: '',
  rating: '',
  cover: '',
};

export default function AddToPlaylist(songData) {}

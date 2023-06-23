import { useState } from 'react';
import SearchBar from './SearchBar';
import FakeData from '../mock/FakeData.json';

const useSongs = (t) => {
  const [songs, setSongs] = useState(FakeData);
  return songs;
};

export default function Playlist({ songList, setSongList }) {
  const songs = useSongs();
  const [filteredSongs, setFilteredSongs] = useState(songs);

  const handleSearch = (query) => {
    const filtered = Object.values(songs).filter(
      (song) =>
        song.name.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSongs(filtered);
  };

  return (
    <div class="p-6">
      <SearchBar onChange={handleSearch} />

      {Object.entries(filteredSongs).map(([key, song]) => (
        <ul class="animate__animated animate__fadeInLeft w-1/2 mx-auto bg-gray-200 p-6 rounded-lg shadow-lg mt-4">
          <li class="py-4" key={key}>
            <div class="flex items-center">
              <img class="w-1/2 px-6" src={song.cover}></img>
              <div class="w-1/2">
                <h3 class="text-lg font-medium">{song.name}</h3>
                <p class="text-gray-500">{song.artist}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="text-gray-500">{song.year}</span>
                <span class="text-gray-500 ml-4">{song.rating} ⭐</span>
                <button class="text-gray-500 ml-2">➕🎶</button>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

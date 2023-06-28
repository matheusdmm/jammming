import { useState } from 'react';
import SearchBar from './SearchBar';
import FakeData from '../mock/FakeData.json';

const useSongs = () => {
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

  console.log(FakeData);

  return (
    <div className="p-6">
      <SearchBar onChange={handleSearch} />

      {Object.entries(filteredSongs).map(([key, song]) => (
        <ul
          className="animate__animated animate__fadeInLeft w-1/2 mx-auto bg-gray-200 p-6 rounded-lg shadow-lg mt-4"
          key={key}
        >
          <li className="py-4">
            <div className="flex items-center">
              <img className="w-1/2 px-6" src={song.cover}></img>
              <div className="w-1/2">
                <h3 className="text-lg font-medium">{song.name}</h3>
                <p className="text-gray-500">{song.artist}</p>
              </div>
              <div className="w-1/2 text-right">
                <span className="text-gray-500">{song.year}</span>
                <span className="text-gray-500 ml-4">{song.rating} ⭐</span>
                <button className="text-gray-500 ml-2">➕🎶</button>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

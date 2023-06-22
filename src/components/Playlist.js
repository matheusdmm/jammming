import { useState } from 'react';
import SearchBar from './SearchBar';

const useSongs = () => {
  const [songs, setSongs] = useState({
    song1: {
      artist: 'Artist 1',
      album: 'Album 1',
      year: 2021,
      name: 'Song 1',
      rating: 4.5,
      cover: 'https://picsum.photos/200',
    },
    song2: {
      artist: 'Artist 2',
      album: 'Album 2',
      year: 2020,
      name: 'Song 2',
      rating: 3.8,
      cover: 'https://picsum.photos/200',
    },
    song3: {
      artist: 'Artist 3',
      album: 'Album 3',
      year: 2019,
      name: 'Song 3',
      rating: 4.2,
      cover: 'https://picsum.photos/200',
    },
  });

  return songs;
};

export default function Playlist({ songList, setSongList }) {
  const songs = useSongs();

  const [filteredSongs, setFilteredSongs] = useState(songs);

  const handleSearch = (query) => {
    const filtered = Object.values(songs).filter((song) =>
      song.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSongs(filtered);
  };

  return (
    <div>
      <SearchBar onChange={handleSearch} />
      <br></br>
      {Object.entries(filteredSongs).map(([key, song]) => (
        <ul class="w-1/2 mx-auto bg-gray-200 p-6 rounded-lg shadow-lg">
          <li class="py-4" key={key}>
            <div class="flex items-center">
              <img class="w-1/2 px-6" src={song.cover}></img>
              <div class="w-1/2">
                <h3 class="text-lg font-medium">{song.name}</h3>
                <p class="text-gray-500">{song.artist}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="text-gray-500">{song.year}</span>
                <span class="text-gray-500 ml-4">{song.rating}</span>
                <span class="text-gray-500 ml-2">➕🎶</span>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

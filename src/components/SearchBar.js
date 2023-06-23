import { useState } from 'react';

export default function SearchBar({ onChange }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-1/2 mx-auto bg-gray-200 p-4 rounded-lg shadow-lg flex justify-between">
      <label
        for="MusicSearch"
        class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
      >
        <input
          type="text"
          id="MusicSearch"
          placeholder="Search for a song"
          value={query}
          onChange={handleInputChange}
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Search for a song
        </span>
      </label>
      <a class="flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold hover:shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50">
        Search{' '}
        <span aria-hidden="true" role="img">
          🔎
        </span>
      </a>
    </div>
  );
}

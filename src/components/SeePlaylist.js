import React, { useState } from 'react';

export default function SeePlaylist() {
  const [hideThing, setHideThing] = useState(false);

  return (
    <>
      <div
        className={`animate__animated animate__fadeInUp ${
          hideThing ? 'visibility: hidden' : ''
        } fixed inset-x-0 bottom-0 px-80 p-4`}
      >
        <div className="relative flex items-center justify-between gap-4 rounded-lg bg-pink-600 px-4 py-3 text-white shadow-lg">
          <p className="text-sm font-medium">
            Click here to see your Playlist status! {''}
            <a href="#" className="inline-block underline">
              Check playlist 🧛‍♂️🎶
            </a>
          </p>

          <button
            aria-label="Close"
            className={`shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20`}
            onClick={() => setHideThing(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <button
        className={`${
          !hideThing
            ? 'visibility: invisible'
            : 'visibility: visible animate__animated animate__fadeInUp'
        } fixed right-40 bottom-4 flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold hover:shadow-[6px_6px_0_0_#000] transition focus:shadow-none focus:outline-none focus:ring active:bg-pink-50`}
        onClick={() => setHideThing(false)}
      >
        I Wanna See My Playlist
      </button>
    </>
  );
}

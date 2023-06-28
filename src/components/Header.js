import React, { useState } from 'react';

const Logger = (message) => {
  console.log(message);
};

export default function Header({ title }) {
  const [button, setButton] = useState(false);

  document.title = title;
  return (
    <header className="bg-pink-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="animate__animated animate__rubberBand text-2xl font-bold text-gray-900 sm:text-3xl flex items-center justify-center">
              {title}
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Create a all-time favorite spotify playlist! 🎶🎸
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              className="flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold hover:shadow-[6px_6px_0_0_#000] transition focus:shadow-none focus:outline-none focus:ring active:bg-pink-50"
              type="button"
              onClick={() => Logger('Exported')}
            >
              <span className="text-sm font-medium"> Export playlist </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>

            <button
              className="flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold hover:shadow-[6px_6px_0_0_#000] transition focus:shadow-none focus:outline-none focus:ring active:bg-pink-50"
              type="button"
              onClick={() => Logger('Login')}
            >
              Login with Spotify
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

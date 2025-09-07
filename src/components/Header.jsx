import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { LogoIcon } from '../assets/icons';

const Header = () => {
  const { setPage } = useContext(AppContext);

  return (
    <header className="absolute top-0 left-0 right-0 p-4 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setPage('home')}
        >
          <LogoIcon />
          <span className="text-xl font-bold text-white">Stellar Resume</span>
        </div>
        <nav>
          <button
            onClick={() => setPage('builder')}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-md shadow-purple-500/20 transition-all duration-300 transform hover:scale-105"
          >
            Open Builder
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
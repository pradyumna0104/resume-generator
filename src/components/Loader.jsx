import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="w-64 h-64">
        <DotLottieReact
          src="https://lottie.host/6db2fc07-247d-4586-9607-431ab7962955/v0roo5DfJ9.lottie"
          loop
          autoplay
        />
      </div>
      <p className="text-purple-400 font-semibold mt-4">Building Your Future...</p>
    </div>
  );
};

export default Loader;
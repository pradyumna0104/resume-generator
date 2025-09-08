import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"; // 1. Import Analytics
import App from './App';
import Loader from './components/Loader';

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    // 2. Wrap your components in a React Fragment <>...</>
    <>
      {loading ? <Loader /> : <App />}
      {/* 3. Add the Analytics component here. It's self-closing and has no visual output. */}
      <Analytics />
    </>
  );
};

export default AppWrapper;
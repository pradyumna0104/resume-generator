import React, { useState, useEffect } from 'react';
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

  return loading ? <Loader /> : <App />;
};

export default AppWrapper;
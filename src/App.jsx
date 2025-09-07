import React, { useContext } from 'react';
import { AppContext } from './contexts/AppContext';
import Home from './components/Home';
import Builder from './components/Builder';

// The corrected App component only cares about the 'page' state.
function App() {
  const { page } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-black text-slate-200">
      {/* This simple logic shows the Home component or the Builder component. */}
      {/* It no longer references 'user' or the non-existent 'Auth' component. */}
      {page === 'home' && <Home />}
      {page === 'builder' && <Builder />}
    </div>
  );
}

export default App;
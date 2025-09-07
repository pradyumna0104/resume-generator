import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const templates = [
  { id: 'modern', name: 'Modern' },
  { id: 'clean', name: 'Clean' },
  { id: 'creative', name: 'Creative' },
  { id: 'minimalist', name: 'Minimalist' },
  { id: 'corporate', name: 'Corporate' },
  { id: 'ats', name: 'ATS-Friendly' },
];

const TemplateSwitcher = () => {
  const { template, setTemplate } = useContext(AppContext);

  return (
    <div className="flex items-center gap-2 bg-gray-900/50 p-1 rounded-lg flex-wrap">
      {templates.map((t) => (
        <button
          key={t.id}
          onClick={() => setTemplate(t.id)}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            template === t.id ? 'bg-indigo-500 text-white' : 'text-gray-300 hover:bg-gray-700'
          }`}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
};

export default TemplateSwitcher;
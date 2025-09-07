import React, { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AppContext = createContext();

// --- CORRECTED DATA STRUCTURE ---
// The 'languages' and 'achievements' arrays are now correctly included.
const initialResumeData = {
  personalInfo: { 
    name: 'Your Name', 
    email: 'your.email@example.com', 
    phone: '123-456-7890', 
    location: 'City, State',
    photo: null,
    links: [],
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  languages: [],     // This was missing before
  achievements: [],  // This was missing before
  customSections: [],
};

export const AppProvider = ({ children }) => {
  const [resumeData, setResumeData] = useLocalStorage('resume-data', initialResumeData);
  const [template, setTemplate] = useState('modern');
  const [colorScheme, setColorScheme] = useState('default');
  const [page, setPage] = useState('home');

  const updateResumeData = (newData) => {
    setResumeData(prev => ({ ...prev, ...newData }));
  };

  const value = {
    resumeData,
    updateResumeData,
    template,
    setTemplate,
    colorScheme,
    setColorScheme,
    page,
    setPage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
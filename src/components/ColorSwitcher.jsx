import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const colors = [
  { id: 'default', name: 'Indigo', hex: '#6366F1' },
  { id: 'pink', name: 'Pink', hex: '#EC4899' },
  { id: 'blue', name: 'Blue', hex: '#3B82F6' },
  { id: 'green', name: 'Green', hex: '#22C55E' },
];

const ColorSwitcher = () => {
  const { colorScheme, setColorScheme } = useContext(AppContext);

  return (
    <div className="flex items-center gap-2">
      {colors.map((color) => (
        <button
          key={color.id}
          onClick={() => setColorScheme(color.id)}
          className={`w-6 h-6 rounded-full focus:outline-none transition-transform transform hover:scale-110 ${colorScheme === color.id ? 'ring-2 ring-offset-2 ring-offset-gray-800 ring-white' : ''}`}
          style={{ backgroundColor: color.hex }}
          title={color.name}
        />
      ))}
    </div>
  );
};

export default ColorSwitcher;
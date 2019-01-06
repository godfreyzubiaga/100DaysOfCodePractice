import { createContext } from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    border: '1px solid #000000',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    border: 'none',
  },
};

export const ThemeContext = createContext(themes.dark);

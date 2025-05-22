import React from 'react';
import { Button } from './ui/button';

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <Button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
}

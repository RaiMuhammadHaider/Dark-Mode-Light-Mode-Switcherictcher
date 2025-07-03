import { useEffect, useState } from 'react';

import './App.css';
import Card from './ThemeSwitcher/Card';
import ThemeBtn from './ThemeSwitcher/ThemeBtn';
import { ThemeProvider } from './ThemeSwitcher/theme';

function App() {
  const [theme, setTheme] = useState('light');

  const darkTheme = () => {
    setTheme('dark');
  };

  const lightTheme = () => {
    setTheme('light');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ ThemeMod: theme, darkTheme, lightTheme }}>
      <div className="min-h-screen p-8 transition-all duration-500">
        <ThemeBtn />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;

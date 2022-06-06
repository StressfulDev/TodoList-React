import React, {useState, useEffect} from 'react';
import {ThemeContext, themes} from '../../../theme/themeContext';

const ThemeContextWrapper = (props) => {

  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('dark-theme');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('dark-theme');
        break;
    }
  }, [theme]);

  return (
      <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
        {props.children}
      </ThemeContext.Provider>
  );
}

export default ThemeContextWrapper;
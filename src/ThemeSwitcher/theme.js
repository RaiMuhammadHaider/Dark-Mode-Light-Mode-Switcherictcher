
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  ThemeMod: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}


// export const themeContext = createContext({
//   ThemeMode : 'light',
//   darkThem : ()=>{},
//   lightTheme : ()=>{},
// }) 
// export const ThemeProvider = themeContext.Provider
// export default function useTheme(){
//   return useContext(themeContext)
// }
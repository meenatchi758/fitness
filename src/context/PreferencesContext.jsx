// src/context/PreferencesContext.js
import { createContext, useState } from "react";

export const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [theme, setTheme] = useState("light"); // light/dark
  const [unit, setUnit] = useState("metric"); // metric/imperial

  return (
    <PreferencesContext.Provider value={{ theme, setTheme, unit, setUnit }}>
      {children}
    </PreferencesContext.Provider>
  );
}

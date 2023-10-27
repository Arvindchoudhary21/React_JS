import React from "react";
import { createContext, useContext } from "react";

// !we will do something different from the previous task ok
// !we can fill default value in createContext function ok(previous project me use nhi kiya tha) and we can acces these three things when we call this context 
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})

// !also we can create ThemeProvider here (previous task me alag file banaya tha but humlog direct yha bhi likh sakte hai)

export const ThemeProvider = ThemeContext.Provider;

// !also we can create our custom hook here and it is easy to get the values compare to the previous project osme 2 files lage the but isme sirf ek hi file me kam ho gya
export default function useTheme() {
    return useContext(ThemeContext);
}

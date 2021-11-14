import React from "react";

const defaultColors = {
  background: { h: 0, s: 0, l: 1, a: 1 },
  foreground: { h: 240, s: 1, l: 0.5, a: 1 },
};

export const ColorsContext = React.createContext({
  colors: defaultColors,
  setColors: (colors: any) => {},
});

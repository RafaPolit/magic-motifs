import React, { useContext } from "react";
import styles from "../styles/Square.module.css";

import { ColorsContext } from "../utils/colorsContext";

interface Props {
  on: boolean;
  value: number;
  background?: string;
}

interface Color {
  h: number;
  s: number;
  l: number;
  a: number;
}

const getHsla = (color: Color) => {
  return `hsla(${color.h}, ${color.s * 100}%, ${color.l * 100}%, ${color.a})`;
};

const getHalfBrightness = (color: Color) => {
  return `hsla(${color.h}, ${color.s * 100}%, ${color.l * 80}%, ${color.a})`;
};

export const Square = ({ on = false }: Props) => {
  const {
    colors: { background, foreground },
  } = useContext(ColorsContext);
  console.log();
  return (
    <div className={styles.square}>
      {on ? (
        <div
          className={styles.on}
          style={{
            backgroundColor: getHsla(foreground),
            border: `1px solid ${getHalfBrightness(foreground)}`,
          }}
        ></div>
      ) : (
        <div
          className={styles.off}
          style={{
            backgroundColor: getHsla(background),
            border: `1px solid ${getHalfBrightness(background)}`,
          }}
        ></div>
      )}
    </div>
  );
};

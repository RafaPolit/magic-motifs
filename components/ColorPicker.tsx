import React, { useState, useContext } from "react";
import { ChromePicker } from "react-color";

import { ColorsContext } from "../utils/colorsContext";
import styles from "../styles/Colorpicker.module.css";

interface Props {
  colorKey: string;
}

export const ColorPicker = ({ colorKey }: Props) => {
  const { colors, setColors } = useContext(ColorsContext);
  const [color, setColor] = useState(colors[colorKey]);

  const handleChangeComplete = (color: any) => {
    setColor(color.hsl);
    setColors({ ...colors, [colorKey]: color.hsl });
  };

  return (
    <div className={styles.colorContainer}>
      <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
    </div>
  );
};

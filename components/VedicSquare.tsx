import React, { useState } from "react";
import { Square } from "./Square";
import { vedicValues as equivalences } from "../utils/values";
import styles from "../styles/Square.module.css";

type ValidCharacter = keyof typeof equivalences;
interface Props {
  characters: ValidCharacter | "";
}

export const VedicSquare = ({ characters = "" }: Props) => {
  const charsArray = characters.split("") as ValidCharacter[];
  const values = new Set(charsArray.map((c) => equivalences[c] as number));

  return (
    <div className={styles.squareContainer}>
      <div className={styles.blockSquareRow}>
        <div className={styles.blockSquare}>
          <div className={styles.row}>
            <Square value={1} on={values.has(1)} />
            <Square value={2} on={values.has(2)} />
            <Square value={3} on={values.has(3)} />
            <Square value={4} on={values.has(4)} />
            <Square value={5} on={values.has(5)} />
            <Square value={6} on={values.has(6)} />
            <Square value={7} on={values.has(7)} />
            <Square value={8} on={values.has(8)} />
          </div>
          <div className={styles.row}>
            <Square value={2} on={values.has(2)} />
            <Square value={4} on={values.has(4)} />
            <Square value={6} on={values.has(6)} />
            <Square value={8} on={values.has(8)} />
            <Square value={1} on={values.has(1)} />
            <Square value={3} on={values.has(3)} />
            <Square value={5} on={values.has(5)} />
            <Square value={7} on={values.has(7)} />
          </div>
          <div className={styles.row}>
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
            <Square value={9} on={values.has(9)} />
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
            <Square value={9} on={values.has(9)} />
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
          </div>
          <div className={styles.row}>
            <Square value={4} on={values.has(4)} />
            <Square value={8} on={values.has(8)} />
            <Square value={3} on={values.has(3)} />
            <Square value={7} on={values.has(7)} />
            <Square value={2} on={values.has(2)} />
            <Square value={6} on={values.has(6)} />
            <Square value={1} on={values.has(1)} />
            <Square value={5} on={values.has(5)} />
          </div>
          <div className={styles.row}>
            <Square value={5} on={values.has(5)} />
            <Square value={1} on={values.has(1)} />
            <Square value={6} on={values.has(6)} />
            <Square value={2} on={values.has(2)} />
            <Square value={7} on={values.has(7)} />
            <Square value={3} on={values.has(3)} />
            <Square value={8} on={values.has(8)} />
            <Square value={4} on={values.has(4)} />
          </div>
          <div className={styles.row}>
            <Square value={6} on={values.has(6)} />
            <Square value={2} on={values.has(3)} />
            <Square value={8} on={values.has(9)} />
            <Square value={4} on={values.has(6)} />
            <Square value={0} on={values.has(3)} />
            <Square value={6} on={values.has(9)} />
            <Square value={2} on={values.has(6)} />
            <Square value={8} on={values.has(3)} />
          </div>
          <div className={styles.row}>
            <Square value={7} on={values.has(7)} />
            <Square value={4} on={values.has(5)} />
            <Square value={1} on={values.has(3)} />
            <Square value={8} on={values.has(1)} />
            <Square value={5} on={values.has(8)} />
            <Square value={2} on={values.has(6)} />
            <Square value={9} on={values.has(4)} />
            <Square value={6} on={values.has(2)} />
          </div>
          <div className={styles.row}>
            <Square value={8} on={values.has(8)} />
            <Square value={6} on={values.has(7)} />
            <Square value={4} on={values.has(6)} />
            <Square value={2} on={values.has(5)} />
            <Square value={0} on={values.has(4)} />
            <Square value={8} on={values.has(3)} />
            <Square value={6} on={values.has(2)} />
            <Square value={4} on={values.has(1)} />
          </div>
        </div>
        <div className={styles.blockSquare}>
          <div className={styles.row}>
            <Square value={8} on={values.has(8)} />
            <Square value={6} on={values.has(7)} />
            <Square value={4} on={values.has(6)} />
            <Square value={2} on={values.has(5)} />
            <Square value={0} on={values.has(4)} />
            <Square value={8} on={values.has(3)} />
            <Square value={6} on={values.has(2)} />
            <Square value={4} on={values.has(1)} />
          </div>
          <div className={styles.row}>
            <Square value={7} on={values.has(7)} />
            <Square value={4} on={values.has(5)} />
            <Square value={1} on={values.has(3)} />
            <Square value={8} on={values.has(1)} />
            <Square value={5} on={values.has(8)} />
            <Square value={2} on={values.has(6)} />
            <Square value={9} on={values.has(4)} />
            <Square value={6} on={values.has(2)} />
          </div>
          <div className={styles.row}>
            <Square value={6} on={values.has(6)} />
            <Square value={2} on={values.has(3)} />
            <Square value={8} on={values.has(9)} />
            <Square value={4} on={values.has(6)} />
            <Square value={0} on={values.has(3)} />
            <Square value={6} on={values.has(9)} />
            <Square value={2} on={values.has(6)} />
            <Square value={8} on={values.has(3)} />
          </div>
          <div className={styles.row}>
            <Square value={5} on={values.has(5)} />
            <Square value={1} on={values.has(1)} />
            <Square value={6} on={values.has(6)} />
            <Square value={2} on={values.has(2)} />
            <Square value={7} on={values.has(7)} />
            <Square value={3} on={values.has(3)} />
            <Square value={8} on={values.has(8)} />
            <Square value={4} on={values.has(4)} />
          </div>
          <div className={styles.row}>
            <Square value={4} on={values.has(4)} />
            <Square value={8} on={values.has(8)} />
            <Square value={3} on={values.has(3)} />
            <Square value={7} on={values.has(7)} />
            <Square value={2} on={values.has(2)} />
            <Square value={6} on={values.has(6)} />
            <Square value={1} on={values.has(1)} />
            <Square value={5} on={values.has(5)} />
          </div>
          <div className={styles.row}>
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
            <Square value={9} on={values.has(9)} />
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
            <Square value={9} on={values.has(9)} />
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
          </div>
          <div className={styles.row}>
            <Square value={2} on={values.has(2)} />
            <Square value={4} on={values.has(4)} />
            <Square value={6} on={values.has(6)} />
            <Square value={8} on={values.has(8)} />
            <Square value={1} on={values.has(1)} />
            <Square value={3} on={values.has(3)} />
            <Square value={5} on={values.has(5)} />
            <Square value={7} on={values.has(7)} />
          </div>
          <div className={styles.row}>
            <Square value={1} on={values.has(1)} />
            <Square value={2} on={values.has(2)} />
            <Square value={3} on={values.has(3)} />
            <Square value={4} on={values.has(4)} />
            <Square value={5} on={values.has(5)} />
            <Square value={6} on={values.has(6)} />
            <Square value={7} on={values.has(7)} />
            <Square value={8} on={values.has(8)} />
          </div>
        </div>
      </div>
      <div className={styles.blockSquareRow}>
        <div className={styles.blockSquare}>
          <div className={styles.row}>
            <Square value={8} on={values.has(8)} />
            <Square value={6} on={values.has(7)} />
            <Square value={4} on={values.has(6)} />
            <Square value={2} on={values.has(5)} />
            <Square value={0} on={values.has(4)} />
            <Square value={8} on={values.has(3)} />
            <Square value={6} on={values.has(2)} />
            <Square value={4} on={values.has(1)} />
          </div>
          <div className={styles.row}>
            <Square value={7} on={values.has(7)} />
            <Square value={4} on={values.has(5)} />
            <Square value={1} on={values.has(3)} />
            <Square value={8} on={values.has(1)} />
            <Square value={5} on={values.has(8)} />
            <Square value={2} on={values.has(6)} />
            <Square value={9} on={values.has(4)} />
            <Square value={6} on={values.has(2)} />
          </div>
          <div className={styles.row}>
            <Square value={6} on={values.has(6)} />
            <Square value={2} on={values.has(3)} />
            <Square value={8} on={values.has(9)} />
            <Square value={4} on={values.has(6)} />
            <Square value={0} on={values.has(3)} />
            <Square value={6} on={values.has(9)} />
            <Square value={2} on={values.has(6)} />
            <Square value={8} on={values.has(3)} />
          </div>
          <div className={styles.row}>
            <Square value={5} on={values.has(5)} />
            <Square value={1} on={values.has(1)} />
            <Square value={6} on={values.has(6)} />
            <Square value={2} on={values.has(2)} />
            <Square value={7} on={values.has(7)} />
            <Square value={3} on={values.has(3)} />
            <Square value={8} on={values.has(8)} />
            <Square value={4} on={values.has(4)} />
          </div>
          <div className={styles.row}>
            <Square value={4} on={values.has(4)} />
            <Square value={8} on={values.has(8)} />
            <Square value={3} on={values.has(3)} />
            <Square value={7} on={values.has(7)} />
            <Square value={2} on={values.has(2)} />
            <Square value={6} on={values.has(6)} />
            <Square value={1} on={values.has(1)} />
            <Square value={5} on={values.has(5)} />
          </div>
          <div className={styles.row}>
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
            <Square value={9} on={values.has(9)} />
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
            <Square value={9} on={values.has(9)} />
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
          </div>
          <div className={styles.row}>
            <Square value={2} on={values.has(2)} />
            <Square value={4} on={values.has(4)} />
            <Square value={6} on={values.has(6)} />
            <Square value={8} on={values.has(8)} />
            <Square value={1} on={values.has(1)} />
            <Square value={3} on={values.has(3)} />
            <Square value={5} on={values.has(5)} />
            <Square value={7} on={values.has(7)} />
          </div>
          <div className={styles.row}>
            <Square value={1} on={values.has(1)} />
            <Square value={2} on={values.has(2)} />
            <Square value={3} on={values.has(3)} />
            <Square value={4} on={values.has(4)} />
            <Square value={5} on={values.has(5)} />
            <Square value={6} on={values.has(6)} />
            <Square value={7} on={values.has(7)} />
            <Square value={8} on={values.has(8)} />
          </div>
        </div>
        <div className={styles.blockSquare}>
          <div className={styles.row}>
            <Square value={1} on={values.has(1)} />
            <Square value={2} on={values.has(2)} />
            <Square value={3} on={values.has(3)} />
            <Square value={4} on={values.has(4)} />
            <Square value={5} on={values.has(5)} />
            <Square value={6} on={values.has(6)} />
            <Square value={7} on={values.has(7)} />
            <Square value={8} on={values.has(8)} />
          </div>
          <div className={styles.row}>
            <Square value={2} on={values.has(2)} />
            <Square value={4} on={values.has(4)} />
            <Square value={6} on={values.has(6)} />
            <Square value={8} on={values.has(8)} />
            <Square value={1} on={values.has(1)} />
            <Square value={3} on={values.has(3)} />
            <Square value={5} on={values.has(5)} />
            <Square value={7} on={values.has(7)} />
          </div>
          <div className={styles.row}>
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
            <Square value={9} on={values.has(9)} />
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
            <Square value={9} on={values.has(9)} />
            <Square value={3} on={values.has(3)} />
            <Square value={6} on={values.has(6)} />
          </div>
          <div className={styles.row}>
            <Square value={4} on={values.has(4)} />
            <Square value={8} on={values.has(8)} />
            <Square value={3} on={values.has(3)} />
            <Square value={7} on={values.has(7)} />
            <Square value={2} on={values.has(2)} />
            <Square value={6} on={values.has(6)} />
            <Square value={1} on={values.has(1)} />
            <Square value={5} on={values.has(5)} />
          </div>
          <div className={styles.row}>
            <Square value={5} on={values.has(5)} />
            <Square value={1} on={values.has(1)} />
            <Square value={6} on={values.has(6)} />
            <Square value={2} on={values.has(2)} />
            <Square value={7} on={values.has(7)} />
            <Square value={3} on={values.has(3)} />
            <Square value={8} on={values.has(8)} />
            <Square value={4} on={values.has(4)} />
          </div>
          <div className={styles.row}>
            <Square value={6} on={values.has(6)} />
            <Square value={2} on={values.has(3)} />
            <Square value={8} on={values.has(9)} />
            <Square value={4} on={values.has(6)} />
            <Square value={0} on={values.has(3)} />
            <Square value={6} on={values.has(9)} />
            <Square value={2} on={values.has(6)} />
            <Square value={8} on={values.has(3)} />
          </div>
          <div className={styles.row}>
            <Square value={7} on={values.has(7)} />
            <Square value={4} on={values.has(5)} />
            <Square value={1} on={values.has(3)} />
            <Square value={8} on={values.has(1)} />
            <Square value={5} on={values.has(8)} />
            <Square value={2} on={values.has(6)} />
            <Square value={9} on={values.has(4)} />
            <Square value={6} on={values.has(2)} />
          </div>
          <div className={styles.row}>
            <Square value={8} on={values.has(8)} />
            <Square value={6} on={values.has(7)} />
            <Square value={4} on={values.has(6)} />
            <Square value={2} on={values.has(5)} />
            <Square value={0} on={values.has(4)} />
            <Square value={8} on={values.has(3)} />
            <Square value={6} on={values.has(2)} />
            <Square value={4} on={values.has(1)} />
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import stylesInput from "../styles/Input.module.css";

import { ColorsContext } from "../utils/colorsContext";

import { MagicSquare } from "../components/MagicSquare";
import { VedicSquare } from "../components/VedicSquare";
import { ColorPicker } from "../components/ColorPicker";

const defaultColors = {
  background: { h: 0, s: 0, l: 1, a: 1 },
  foreground: { h: 240, s: 1, l: 0.5, a: 1 },
};

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [colors, setColors] = useState(defaultColors);
  const [characters, setCharacters] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    const allChars = event.target.value.toLowerCase().split("");
    const charsSet = new Set(allChars);
    const usedChars = [...charsSet].join("").replace(/[^a-z0-9]+/g, "");
    setCharacters(usedChars);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Magic Motifs</title>
        <meta name="description" content="Rosangela's Magic Motifs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Rosangela's Magic Motifs</h1>

        <div className={stylesInput.centered}>
          <div className={stylesInput.group}>
            <input
              className={stylesInput.input}
              type="text"
              id="string"
              value={text}
              onChange={handleTextChange}
              required
            />
            <label className={stylesInput.label} htmlFor="string">
              Text or Numbers
            </label>
            <div className={stylesInput.bar}></div>
          </div>
        </div>
        <ColorsContext.Provider value={{ colors, setColors }}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Magic</h2>
              <MagicSquare characters={characters} />
            </div>
            <div className={styles.card}>
              <h2>Vedic</h2>
              <VedicSquare characters={characters} />
            </div>
            <div className={styles.card}>
              <h2>Motif Color</h2>
              <ColorPicker colorKey="foreground" />
            </div>
            <div className={styles.card}>
              <h2>Background Color</h2>
              <ColorPicker colorKey="background" />
            </div>
          </div>
        </ColorsContext.Provider>
      </main>
    </div>
  );
};

export default Home;

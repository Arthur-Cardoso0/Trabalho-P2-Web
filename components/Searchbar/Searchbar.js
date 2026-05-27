"use client";
import { useState } from "react";
import styles from "./Searchbar.module.css";

export default function SearchBar({ procurar }) {
  const [filtro, buscar] = useState("");

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.searchbar}
        type="text"
        placeholder="🔍  Buscar produto..."
        value={filtro}
        onChange={(e) => {
          buscar(e.target.value);
          procurar(e.target.value);
        }}
      />
    </div>
  );
}

"use client";
import { useState } from "react";
import ProductCard from "../../components/Productcard/Productcard.js";
import SearchBar from "../../components/Searchbar/Searchbar.js";
import styles from "./Product.module.css";
import { Products } from "./Produtos.js";

export default function Produtos() {
  const [produtos, filtro] = useState(Products);

  const handleSearch = (query) => {
    filtro(
      Products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h1 className={styles.titulo}>Catálogo de <span>Produtos</span></h1>
      <SearchBar procurar={handleSearch} />
      <div className={styles.catalogo}>
        {produtos.length === 0 ? (
          <p className={styles.vazio}>Nenhum produto encontrado.</p>
        ) : (
          produtos.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

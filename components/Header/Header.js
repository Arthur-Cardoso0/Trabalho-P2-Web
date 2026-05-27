"use client";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}>Catálogo<span>.</span></span>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </nav>
    </header>
  );
}

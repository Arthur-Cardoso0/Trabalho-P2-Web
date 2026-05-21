"use client";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/contato/">Contato</Link>
      </nav>
    </header>
  );
}

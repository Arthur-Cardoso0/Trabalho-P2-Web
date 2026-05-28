import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.badge}>✦ Next.js + React</div>
      <h1 className={styles.title}>
        Bem-vindo ao<br /><span>Catálogo Interativo</span>
      </h1>
      <p className={styles.sub}>
        Explore produtos, favorite os que curtir e veja todos os detalhes.
      </p>
      <Link href="/produtos" className={styles.cta}>Ver Produtos →</Link>
    </div>
  );
}

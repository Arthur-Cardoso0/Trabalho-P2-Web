import styles from "./sobre.module.css";

export default function Sobre() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titulo}>Sobre o <span>Projeto</span></h1>
      <p className={styles.texto}>
        Este site foi criado para demonstrar o uso de Next.js e React
        para construir um catálogo de produtos interativo.
        Ele inclui uma página inicial, um catálogo de produtos, detalhes de cada produto,
        uma página de contato e uma página sobre o projeto. O objetivo é mostrar como criar
        uma aplicação web moderna e responsiva usando as melhores práticas do desenvolvimento web.
      </p>
      <div className={styles.tags}>
        {["Next.js", "React", "CSS Modules", "File-based Routing", "useState"].map(t => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </div>
  );
}

import styles from "./contato.module.css";

export default function Contato() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titulo}>Entre em <span>Contato</span></h1>
      <form className={styles.form}>
        <div className={styles.field}>
          <label>Nome</label>
          <input type="text" placeholder="Seu nome" />
        </div>
        <div className={styles.field}>
          <label>E-mail</label>
          <input type="email" placeholder="seu@email.com" />
        </div>
        <div className={styles.field}>
          <label>Mensagem</label>
          <textarea placeholder="Escreva sua mensagem..." rows={5}></textarea>
        </div>
        <button type="submit" className={styles.btn}>Enviar mensagem →</button>
      </form>
    </div>
  );
}

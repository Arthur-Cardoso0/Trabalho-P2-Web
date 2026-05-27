import styles from './contato.module.css';

export default function Contato() {
  return (
    <div className={styles.contato}>
      <h1>Contato</h1>
      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu email" />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

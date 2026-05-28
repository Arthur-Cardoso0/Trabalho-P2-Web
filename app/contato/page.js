"use client";
import { useState } from "react";
import styles from "./contato.module.css";

export default function Contato() {
  const [mensagem, setMensagem] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");
 
  const handleSubmit = (e) => { 
    e.preventDefault();
    if(!nome || !email || !texto) {
      setError("Por favor, preencha todos os campos.");
      setTimeout(() => {setError("");}, 4000);
      return;
    }
    setMensagem(true);
    setTimeout(() => {setMensagem(false);}, 2000);
    setNome("");
    setEmail("");
    setTexto("");
  }
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titulo}>Entre em <span>Contato</span></h1>
      <form className={styles.form} onSubmit = {handleSubmit}>
        <div className={styles.field}>
          <label>Nome</label>
          <input 
            type="text" 
            placeholder="Seu nome" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label>E-mail</label>
          <input 
            type="email" 
            placeholder="seu@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label>Mensagem</label>
          <textarea 
            placeholder="Escreva sua mensagem..." 
            rows={5}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className={styles.btn}>Enviar mensagem →</button>
      </form>
      {error && (<p className={styles.error}>{error}</p>)}
      {mensagem && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            Mensagem enviada com sucesso!
          </div>
        </div>
      )}
    </div>
  );
}
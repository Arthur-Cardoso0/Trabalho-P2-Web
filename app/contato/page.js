export default function Contato() {
  return (
    <div>
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

import '../styles/global.css';

export default function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo ao Catálogo Interativo</h1>
      <p>Explore nossos produtos e veja os detalhes!</p>
      <a href="/produtos">Ver Produtos</a>
    </div>
  );
}
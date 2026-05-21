import { Products } from "../Produtos.js";

export default async function ProdutoDetalhe({ params }) {
  const { id } = await params;
  const product = Products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  return (
    <div className="produto-detalhe">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Preço: R${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

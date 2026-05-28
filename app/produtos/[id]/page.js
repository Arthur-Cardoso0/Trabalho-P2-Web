import { Products } from "../Produtos.js";
import Link from "next/link.js";
import Image from "next/image.js";
import styles from "./detalhe.module.css";

export default async function ProdutoDetalhe({ params }) {
  const { id } = await params;
  const product = Products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className={styles.notfound}>
        <h1>Produto não encontrado</h1>
        <Link href="/produtos" className={styles.back}>← Voltar</Link>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Link href="/produtos" className={styles.back}>← Voltar ao catálogo</Link>
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <Image src={product.image} alt={product.name} width={480} height={360} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.nome}>{product.name}</h1>
          <p className={styles.preco}>R$ {product.price.toLocaleString('pt-BR')}</p>
          <p className={styles.desc}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

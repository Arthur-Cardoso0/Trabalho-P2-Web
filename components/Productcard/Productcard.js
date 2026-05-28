"use client";
import Link from "next/link.js";
import LikeButton from "../Likebutton/Likebutton.js";
import styles from "./Productcard.module.css";
import Image from "next/image.js";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={product.image} alt={product.name} width={300} height={180} />
      </div>
      <p className={styles.name}>{product.name}</p>
      <p className={styles.price}>R$ {product.price.toLocaleString('pt-BR')}</p>
      <div className={styles.actions}>
        <LikeButton productId={product.id} />
        <Link href={`/produtos/${product.id}`} className={styles.detalhes}>Ver detalhes →</Link>
      </div>
    </div>
  );
}

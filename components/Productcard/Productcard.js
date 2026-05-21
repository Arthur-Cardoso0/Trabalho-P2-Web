"use client";
import Link from "next/link";
import LikeButton from "../Likebutton/Likebutton.js";
import styles from "./Productcard.module.css";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.name} width={300} height={300} />
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
      <LikeButton />
      <Link href={`/produtos/${product.id}`}>Ver detalhes</Link>
    </div>
  );  
} 


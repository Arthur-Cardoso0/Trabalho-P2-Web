"use client";
import { useState,useEffect } from "react";
import styles from "./Likebutton.module.css";

export default function LikeButton({ productId }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const chavelikes = `likes-${productId}`;
  const chaveliked = `liked-${productId}`;
  
  useEffect(() => {
    const laikado = localStorage.getItem(chaveliked);
    const likesado = localStorage.getItem(chavelikes);
    if (likesado) {
      setLikes(parseInt(likesado, 10  ));
    }
    if (laikado === "true") {
      setLiked(true);
    }
  }, [chavelikes, chaveliked]);
 
  const handleClick = () => {
    if (!liked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setLiked(true);
      localStorage.setItem(chaveliked, "true");
      localStorage.setItem(chavelikes, newLikes.toString());
    }
  }
  
  return (
    <button className={`${styles.likebutton} ${liked ? styles.liked : ""}`}
    onClick={handleClick} disabled={liked}>
      ⭐ {likes}
    </button>
  );
}

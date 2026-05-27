"use client";
import { useState } from "react";
import styles from "./Likebutton.module.css";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const liked = likes > 0;

  return (
    <button
      className={`${styles.likebutton} ${liked ? styles.liked : ""}`}
      onClick={() => setLikes(likes + 1)}
    >
      ⭐ {likes}
    </button>
  );
}

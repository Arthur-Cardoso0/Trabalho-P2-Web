"use client";
import { useState } from "react";
import styles from "./Likebutton.module.css";
export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button className={styles.likebutton} onClick={() => setLikes(likes + 1)}>
      ⭐ {likes}
    </button>
  );
}

import React from "react";
import styles from "./Post.module.css";
import { Comments } from "./Comments";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src="https://github.com/eduardoraraujo.png" />
          <div className={styles.authorInfo}>
            <strong>Eduardo Ronchi</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="25 de Fevereiro às 20:15h" dateTime="2025-02-25">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">dudu.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comments />
        <Comments />
        <Comments />
      </div>
    </article>
  );
}

import React from "react";
import styles from "./Comments.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comments() {
  return (
    <div className={styles.comments}>
      <img src="https://github.com/eduardoraraujo.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Ronchi</strong>
              <time title="25 de Fevereiro às 20:15h" dateTime="2025-02-25">
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

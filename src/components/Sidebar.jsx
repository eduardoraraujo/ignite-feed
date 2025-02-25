import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
      className={styles.cover}
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className={styles.profile}>
        <img src="https://github.com/eduardoraraujo.png" alt="" />
        <strong>Eduardo Ronchi</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
            <PencilSimpleLine size={20} />
            Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

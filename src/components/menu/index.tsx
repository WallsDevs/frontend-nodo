import Image from "next/image";
import { RedButton } from "../CustomButtons";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className="px-20">
      <nav className={styles.menuContainer}>
        <div className={styles.menuContent}>
          <div className={styles.logoSection}>
            <Image
              src="/logo.svg"
              alt="Nodo Conceptual"
              width={220}
              height={55}
              priority
            />
          </div>
          <ul className={styles.menuLinks}>
            <li>
              <a href="/" className={styles.active}>
                Inicio
              </a>
            </li>
            <li>
              <a href="/portafolio">Portafolio</a>
            </li>
            <li>
              <a href="/quienes-somos">Quiénes Somos</a>
            </li>
            <li>
              <a href="/cursos">Cursos y Formaciones</a>
            </li>
          </ul>
          <div className={styles.buttonSection}>
            <RedButton style={{ padding: "0 60px" }}>Contáctanos</RedButton>
          </div>
        </div>
      </nav>
    </div>
  );
}

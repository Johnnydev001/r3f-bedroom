import styles from "../../../styles/carstand/navbar/navbar.module.scss";
import home from "/assets/carstand/icons/home.png";
import english from "/assets/carstand/icons/english.png";
import { state } from "../../../App";

export default function CarStandNavbarComponent() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo} onClick={() => state.displayEpisode = true}>
        LOGO
      </div>

      <div className={styles.page_links}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img
              data-name="home"
              className={styles.home}
              src={home}
              alt="Home"
            />
          </li>
          <li className={styles.link} data-name="vehicles">
            VEHICLES
          </li>
          <li className={styles.link} data-name="customizer">
            CUSTOMIZER
          </li>
          <li className={styles.link} data-name="contact">
            CONTACT
          </li>
          <li className={styles.link} data-name="language">
            <img className={styles.english} src={english} alt="Language" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

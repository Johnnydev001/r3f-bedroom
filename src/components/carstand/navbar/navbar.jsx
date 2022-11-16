import styles from "../../../styles/carstand/navbar/navbar.module.scss";
import home from "/assets/carstand/icons/home.png";
import { state } from "../../../App";

export default function CarStandNavbarComponent() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>LOGO</div>

      <div className={styles.page_links}>
        <ul className={styles.links}>
          <li className={styles.link} data-name="vehicles">
            VEHICLES
          </li>
          <li className={styles.link} data-name="customizer">
            CUSTOMIZER
          </li>
          <li className={styles.link} data-name="contact">
            CONTACT
          </li>
          <li className={styles.link} data-name="promotion">
            <button
              onClick={() => (state.displayPromotion = true)}
              className={styles.promotion_btn}
            >
              Promotion
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import styles from '../../styles/navbar/navbar.module.scss'
export default function NavbarComponent() {

    return (
        <nav className={styles.container}>
        
            <section className={styles.page_links}>

                <ul className={styles.links}>
                    <li className={styles.link}>Home</li>
                    <li className={styles.link}>About</li>
                    <li className={styles.link}>Contact</li>
                </ul>

            </section>

      </nav>
    )

}
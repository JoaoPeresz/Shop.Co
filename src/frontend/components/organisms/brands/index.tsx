import {Fragment} from "react";
import styles from "./brands.module.css";

export default function Brands() {
    return (
        <Fragment>
            <section className={styles.brandsBanner}>
                <ul className={styles.containerBox}>
                    <li><img className={styles.companiesImage}
                             src="/assets/home-page/versace.png" alt="Versace"/></li>
                    <li><img className={styles.companiesImage} src="/assets/home-page/zara.png"
                             alt="Zara"/></li>
                    <li><img className={styles.companiesImage}
                             src="/assets/home-page/gucci.png" alt="Gucci"/></li>
                    <li><img className={styles.companiesImage}
                             src="/assets/home-page/prada.png" alt="Prada"/></li>
                    <li><img className={styles.companiesImage}
                             src="/assets/home-page/calvin-klein.png" alt="Calvin Klein"/></li>
                </ul>
            </section>
        </Fragment>
    );
}

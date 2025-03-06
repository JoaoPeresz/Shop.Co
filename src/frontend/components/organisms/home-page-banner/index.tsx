import { Fragment } from "react";
import styles from "./home-page-banner.module.css";
import Image from "next/image";

export default function HomePageBanner() {

    const ShopNow = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const clothes = document.getElementById("clothes") as HTMLElement;

        if (clothes) {
            clothes.scrollIntoView({ behavior: "smooth", block: "end" });

            setTimeout(() => {
                clothes.setAttribute("tabindex", "-1");
                clothes.focus();
            }, 500);
        }
    };

    return (
        <Fragment>
            <main className={styles.containerBanner}>
                <section className={styles.defaultContainer}>
                    <section className={styles.containerUpperBanner}>
                        <h1 className={styles.bannerTitle}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <h3 className={styles.collectionDescription}>
                            Browse through our diverse range of meticulously crafted garments,
                            designed to bring out your individuality and cater to your sense of style.
                        </h3>
                        <button onClick={ShopNow} className={styles.containerButton} aria-label="Shop Now">
                            Shop Now
                        </button>
                        <ul className={styles.containerInfo}>
                            <li className={styles.statisticNumber}>
                                <h3 className={styles.itemValue}>200+</h3>
                                <p className={styles.itemDescription}>International Brands</p>
                            </li>
                            <li className={styles.statisticNumber}>
                                <h3 className={styles.itemValue}>2,000+</h3>
                                <p className={styles.itemDescription}>High-Quality Products</p>
                            </li>
                            <li className={styles.statisticNumber}>
                                <h3 className={styles.itemValue}>3,000+</h3>
                                <p className={styles.itemDescription}>Happy Customers</p>
                            </li>
                        </ul>
                    </section>
                    <section className={styles.containerBannerImage}>
                        <section className={styles.containerBoxBanner}>
                            <Image width={104} height={104} className={styles.rightUpStar} src="/assets/home-page/black-start.png" alt="Star icon" />
                            <Image width={56} height={56} className={styles.leftCenterStar} src="/assets/home-page/black-start.png" alt="Star icon" />
                        </section>
                    </section>
                </section>
            </main>
        </Fragment>
    );
}

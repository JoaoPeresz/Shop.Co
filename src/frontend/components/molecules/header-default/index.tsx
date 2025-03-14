import {Fragment} from "react";
import styles from "./header-default.module.css";
import IconMenu from "@/src/frontend/components/atoms/icon-menu";
import IconArrowDonw from "@/src/frontend/components/atoms/icon-arrow-donw";
import IconShoppingCart from "@/src/frontend/components/atoms/icon-shopping-cart";
import IconProfile from "@/src/frontend/components/atoms/icon-profile";
import IconSearch from "src/frontend/components/atoms/icon-search";
import {useRouter} from "next/navigation";

export default function HeaderDefault () {
    const router = useRouter();

    return (
        <Fragment>
            <header className={styles.containerHeader}>
                <section className={styles.containerBoxHeader}>
                    <div className={styles.menuIcon}>
                        <IconMenu/>
                    </div>
                    <h1 className={styles.shopLogo} onClick={()=>router.push('/')}>SHOP.CO</h1>
                    <nav className={styles.menu}>
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}>
                                <a onClick={() => {}}>
                                    Shop <IconArrowDonw/>
                                </a>
                            </li>
                            <li className={styles.menuItem}><a href="#">On Sale</a></li>
                            <li className={styles.menuItem}><a href="#">New Arrivals</a></li>
                            <li className={styles.menuItem}><a href="#">Brands</a></li>
                        </ul>
                    </nav>
                    <input className={styles.searchInput} aria-label="" placeholder="Search for products..."/>
                    <section className={styles.userContainer}>
                        <IconShoppingCart/>
                        <IconProfile/>
                        <IconSearch/>
                    </section>
                </section>
            </header>
        </Fragment>
    )
}
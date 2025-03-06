import {Fragment} from "react";
import HeaderPromo from "@/src/frontend/components/molecules/header-promo";
import HeaderDefault from "@/src/frontend/components/molecules/header-default";
import styles from "./home-page-header.module.css"

export default function HomePageHeader() {
    return (
        <Fragment>
            <section className={styles.containerPage}>
                <HeaderPromo/>
                <HeaderDefault/>
            </section>
        </Fragment>
    )
}
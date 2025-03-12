import {Fragment} from "react";
import styles from "./all-reviews.module.css"
import FloatTabNavigator from "@/src/frontend/components/molecules/float-tab-navigator";

export default function AllReviews () {
    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <FloatTabNavigator/>
                </section>
            </section>
        </Fragment>
    )
}
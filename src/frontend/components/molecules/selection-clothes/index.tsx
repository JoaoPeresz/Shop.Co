import {Fragment} from "react";
import styles from "./selection-clothes.module.css";
import SelectColor from "@/src/frontend/components/molecules/select-color";

export default function SelectionClothes () {
    return (
        <Fragment>
            <div className={styles.line}/>
            <section className={styles.selectColorContainer}>
                <h3 className={styles.selectimageTitle}>
                    Select Colors
                </h3>
                <SelectColor/>
            </section>
            <div className={styles.line}/>
        </Fragment>
    )
}
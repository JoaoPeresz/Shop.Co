import {Fragment} from "react";
import styles from "./choose-size.module.css";
import SizeOptions from "@/src/frontend/components/molecules/size-options";

export default function ChooseSize () {
    return (
        <Fragment>
            <section className={styles.selectColorContainer}>
                <h3 className={styles.selectimageTitle}>
                    Choose Size
                </h3>
                <SizeOptions/>
            </section>
            <div className={styles.line}/>
        </Fragment>
    )
}
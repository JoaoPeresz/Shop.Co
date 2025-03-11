import {Fragment} from "react";
import styles from "./clothe-details.module.css"
import ClothesImages from "@/src/frontend/components/molecules/clothes-images";
import ClothesInfos from "@/src/frontend/components/molecules/clothes-infos";

export default function ClotheDetails () {
    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <ClothesImages/>
                    <ClothesInfos/>
                </section>
            </section>
        </Fragment>
    )
}
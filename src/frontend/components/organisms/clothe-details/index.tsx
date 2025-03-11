import {Fragment} from "react";
import styles from "./clothe-details.module.css"
import ClothesImages from "@/src/frontend/components/molecules/clothes-images";
import ClothesInfos from "@/src/frontend/components/molecules/clothes-infos";
import ProductDTO from "@/src/models/products-dto";

type Props = {
    clothe: ProductDTO;
}

export default function ClotheDetails ({clothe} : Props) {
    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <ClothesImages/>
                    <ClothesInfos clothe={clothe}/>
                </section>
            </section>
        </Fragment>
    )
}
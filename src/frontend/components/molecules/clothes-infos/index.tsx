import {Fragment} from "react";
import styles from "./clothes-infos.module.css"
import ProductDTO from "@/src/models/products-dto";

type Props = {
    clothe : ProductDTO;
}

export default function ClothesInfos ({clothe} : Props) {
    return (
        <Fragment>
            <section className={styles.infoContainer}>
                <h1>{clothe?.name}</h1>
                <h1>{clothe.price}</h1>
                {clothe.discount > 0 ? (
                    <>
                        <h2 className={styles.previousPrice}>
                            <del>${clothe.discount}</del>
                        </h2>
                        <section className={styles.containerDiscount}>
                            <span className={styles.discount}>- {clothe.discount_percentage}%</span>
                        </section>
                    </>
                ) : ("")}
                <h3>{clothe.description}</h3>
                {/*<img src={clothe.rating_image} alt={clothe?.name}/>*/}
            </section>
        </Fragment>
    )
}
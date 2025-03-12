import {Fragment} from "react";
import styles from "./clothes-infos.module.css"
import ProductDTO from "@/src/models/products-dto";
import SelectionClothes from "@/src/frontend/components/molecules/selection-clothes";
import ChooseSize from "@/src/frontend/components/molecules/choose-size";
import AddToCart from "@/src/frontend/components/molecules/add-to-cart";

type Props = {
    clothe? : ProductDTO;
    ratingImage: string;
}

export default function ClothesInfos ({clothe, ratingImage} : Props) {

    return (
        <Fragment>
            <section className={styles.infoContainer}>
                <h1 className={styles.clotheName}>{clothe?.name}</h1>
                <section className={styles.ratingContainer}>
                    {ratingImage && <img className={styles.ratingImage} src={ratingImage} alt={"rating"}/>}
                    <div className={styles.rating}>{clothe?.rating}<h4 className={styles.ratingMax}>/5</h4></div>
                </section>
                <section className={styles.valuesContainer}>
                    <h1 className={styles.price}>${clothe?.price}</h1>
                    {clothe && clothe.discount && clothe.discount > 0 ? (
                        <section className={styles.discountContainer}>
                            <h2 className={styles.previousPrice}>
                                <del>${clothe.discount}</del>
                            </h2>
                            <section className={styles.containerDiscount}>
                                <span className={styles.discount}>- {clothe.discount_percentage}%</span>
                            </section>
                        </section>
                    ) : ("")}
                </section>
                <h2 className={styles.description}>{clothe?.description}</h2>
                <SelectionClothes/>
                <ChooseSize/>
                <AddToCart clothe={clothe}/>
            </section>
        </Fragment>
    )
}
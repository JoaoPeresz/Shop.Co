import {Fragment} from "react";
import styles from "./clothes-card.module.css"
import {Product} from "src/frontend/components/organisms/clothes-section";

type Props = {
    index: number;
    product: Product;
}

export default function ClothesCard ({ index, product }: Props) {
    return (
        <Fragment>
            <article key={index} className={styles.containerArrival}>
                <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                />
                <h1 className={styles.productTitle}>{product.title}</h1>
                <section className={styles.containerRating}>
                    <img
                        src={product.ratingImage}
                        alt="rating"
                    />
                    <h3>{product.rating}</h3>
                </section>
                <section className={styles.containerPrices}>
                    <h1 className={styles.clothesPrice}>${product.price}</h1>
                    {product.previous > 0 && (
                        <>
                            <h2 className={styles.previousPrice}>
                                <del>${product.previous}</del>
                            </h2>
                            <section className={styles.containerDiscount}>
                                <span className={styles.discount}>{product.discount}</span>
                            </section>
                        </>
                    )}
                </section>
            </article>
        </Fragment>
    )
}
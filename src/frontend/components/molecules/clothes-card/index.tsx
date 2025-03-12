import { Fragment } from "react";
import styles from "./clothes-card.module.css";
import ProductsDTO from "@/src/models/products-dto";

type Props = {
    index: number;
    handlerProductDetails?: (id: string) => void;
    product: ProductsDTO;
    clotheImage: string;
    ratingImage: string;
}

export default function ClothesCard ({ index, handlerProductDetails, product, clotheImage, ratingImage }: Props) {
    return (
        <Fragment>
            <article key={index} onClick={() => handlerProductDetails?.(product.id)} className={styles.containerArrival}>
                <img
                    src={clotheImage}
                    alt={product.name}
                    className={styles.productImage}
                />
                <h1 className={styles.productTitle}>{product.name}</h1>
                <section className={styles.containerRating}>
                    <img
                        src={ratingImage}
                        alt="rating"
                    />
                    <h3>{product.rating}/5</h3>
                </section>
                <section className={styles.containerPrices}>
                    <h1 className={styles.clothesPrice}>${product.price}</h1>
                    {product.discount > 0 ? (
                        <>
                            <h2 className={styles.previousPrice}>
                                <del>${product.discount}</del>
                            </h2>
                            <section className={styles.containerDiscount}>
                                <span className={styles.discount}>- {product.discount_percentage}%</span>
                            </section>
                        </>
                    ) : ("")}
                </section>
            </article>
        </Fragment>
    );
}

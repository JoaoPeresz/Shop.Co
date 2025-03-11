import { Fragment } from "react";
import styles from "./new-arrivals.module.css";
import ClothesCard from "@/src/frontend/components/molecules/clothes-card";
import ProductsDTO from "@/src/models/products-dto";

type Props = {
    title: string;
    products: ProductsDTO[];
    clotheImage: { [id: string]: string };
    ratingImage: { [id: string]: string };
    handlerProductDetails: (id: string) => void;
}

export default function ClothesSection ({title, products, clotheImage, ratingImage, handlerProductDetails}: Props) {

    return (
        <Fragment>
            <section className={styles.containerClothes}>
                <section className={styles.containerArrivals}>
                    <h1 className={styles.clothesSectionType}>{title}</h1>
                    <div className={styles.cardsContainer}>
                        {products.map((product, index) => (
                            <ClothesCard
                                ratingImage={ratingImage[product.id]}
                                key={product.id}
                                handlerProductDetails={handlerProductDetails}
                                index={index}
                                product={product}
                                clotheImage={clotheImage[product.id]}
                            />
                        ))}
                    </div>
                    <div className={styles.viewAllButton}>View All</div>
                </section>
            </section>
        </Fragment>
    );
}

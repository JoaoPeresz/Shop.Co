import { Fragment } from "react";
import styles from "./new-arrivals.module.css"
import ClothesCard from "@/src/frontend/components/molecules/clothes-card";
import ProductsDTO from "@/src/models/products-dto";

type Props = {
    title: string;
    products: ProductsDTO[];
}

export default function ClothesSection ({title, products} : Props) {
    return (
        <Fragment>
            <section className={styles.containerClothes}>
                <section className={styles.containerArrivals}>
                    <h1 className={styles.clothesSectionType}>{title}</h1>
                    <div className={styles.cardsContainer}>
                        {products.map((product, index) => (
                            <ClothesCard key={index} index={index} product={product}/>
                        ))}
                    </div>
                    <div className={styles.viewAllButton}>View All</div>
                </section>
            </section>
        </Fragment>
    );
}

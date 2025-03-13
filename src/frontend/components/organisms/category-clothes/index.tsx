import { Fragment, useState } from "react";
import styles from "./category-clothes.module.css";
import CategoryNavigation from "@/src/frontend/components/molecules/category-navigation";
import ClothesCard from "@/src/frontend/components/molecules/clothes-card";
import ProductDTO from "@/src/models/products-dto";
import ClothesNavigation from "@/src/frontend/components/molecules/clothes-navigation";
import ClothesSortCount from "@/src/frontend/components/molecules/clothes-sort-count";

type Props = {
    categoryType: string;
    clotes: ProductDTO[];
    clotheImage: { [id: string]: string };
    ratingImage: { [id: string]: string };
};

export default function CategoryClothes({
                                            categoryType,
                                            clotes,
                                            clotheImage,
                                            ratingImage,
                                        }: Props) {
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(clotes.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentClothes = clotes.slice(startIndex, endIndex);

    return (
        <Fragment>
            <section className={styles.container}>
                <CategoryNavigation categoryType={categoryType} />
                <section className={styles.categoryArea}>
                    <section className={styles.containerFilters}>
                        12
                    </section>
                    <section className={styles.containerAllClothes}>
                        <ClothesSortCount
                            categoryType={categoryType}
                            clotes={clotes}
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                        />
                        <section className={styles.cardsContainer}>
                            {currentClothes.map((product, index) => (
                                <ClothesCard
                                    ratingImage={ratingImage[product.id]}
                                    key={product.id}
                                    handlerProductDetails={() => {}}
                                    index={index}
                                    product={product}
                                    clotheImage={clotheImage[product.id]}
                                />
                            ))}
                        </section>
                        <div className={styles.bottomBar} />
                        <ClothesNavigation
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </section>
                </section>
            </section>
        </Fragment>
    );
}

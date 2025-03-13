import { Fragment, useState } from "react";
import styles from "./category-clothes.module.css";
import CategoryNavigation from "@/src/frontend/components/molecules/category-navigation";
import ClothesCard from "@/src/frontend/components/molecules/clothes-card";
import ProductDTO from "@/src/models/products-dto";
import ClothesNavigation from "@/src/frontend/components/molecules/clothes-navigation";
import ClothesSortCount from "@/src/frontend/components/molecules/clothes-sort-count";
import TuneIcon from '@mui/icons-material/Tune';
import IconArrowRigth from "@/src/frontend/components/atoms/icon-arrow-rigth";
import LineBar from "@/src/frontend/components/atoms/line-bar";
import PriceFilter from "@/src/frontend/components/atoms/price-filter";

type Props = {
    categoryType: string;
    clothes: ProductDTO[];
    clotheImage: { [id: string]: string };
    ratingImage: { [id: string]: string };
};

export default function CategoryClothes({
                                            categoryType,
                                            clothes,
                                            clotheImage,
                                            ratingImage,
                                        }: Props) {
    const [priceRange, setPriceRange] = useState<number[]>([0, 350]);

    const filteredClothes = clothes.filter(product =>
        Number(product.price) >= priceRange[0] && Number(product.price) <= priceRange[1]
    );

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(filteredClothes.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentClothes = filteredClothes.slice(startIndex, endIndex);

    return (
        <Fragment>
            <section className={styles.container}>
                <CategoryNavigation categoryType={categoryType} />
                <section className={styles.categoryArea}>
                    <section className={styles.containerFilters}>
                        <section className={styles.filterTitle}>
                            Filters <TuneIcon fontSize={'large'} style={{ color: '#00000066', cursor: 'pointer' }}/>
                        </section>
                        <LineBar />
                        <section className={styles.filterClotheType}>
                            {categoryType} <IconArrowRigth />
                        </section>
                        <LineBar />
                        <PriceFilter onPriceChange={setPriceRange} currentRange={priceRange} />
                    </section>
                    <section className={styles.containerAllClothes}>
                        <ClothesSortCount
                            categoryType={categoryType}
                            clothes={filteredClothes}
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                        />
                        <section className={styles.cardsContainer}>
                            <section className={styles.cardsContainerBox}>
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
                        </section>
                        <div className={styles.bottomBar} />
                        <LineBar />
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

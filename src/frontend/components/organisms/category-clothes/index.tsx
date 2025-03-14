import { Fragment, useState, useEffect } from "react";
import styles from "./category-clothes.module.css";
import CategoryNavigation from "@/src/frontend/components/molecules/category-navigation";
import ClothesCard from "@/src/frontend/components/molecules/clothes-card";
import ProductDTO from "@/src/models/products-dto";
import ClothesNavigation from "@/src/frontend/components/molecules/clothes-navigation";
import ClothesSortCount from "@/src/frontend/components/molecules/clothes-sort-count";
import LineBar from "@/src/frontend/components/atoms/line-bar";
import ClothesFilter from "src/frontend/components/organisms/clothes-filter";

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
    const [internalPriceRange, setInternalPriceRange] = useState<number[]>([0, 350]);
    const [internalSelectedTypes, setInternalSelectedTypes] = useState<string[]>([]);
    const [internalSelectedColors, setInternalSelectedColors] = useState<string[]>([]);

    const [appliedPriceRange, setAppliedPriceRange] = useState<number[]>([0, 350]);
    const [appliedSelectedTypes, setAppliedSelectedTypes] = useState<string[]>([]);
    const [appliedSelectedColors, setAppliedSelectedColors] = useState<string[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const handlerApplyFilters = () => {
        console.log("entrando")
        setAppliedPriceRange(internalPriceRange);
        setAppliedSelectedTypes(internalSelectedTypes);
        setAppliedSelectedColors(internalSelectedColors);
        setCurrentPage(1);
    };

    let filteredClothes = clothes.filter(product =>
        Number(product.price) >= appliedPriceRange[0] &&
        Number(product.price) <= appliedPriceRange[1]
    );

    if (appliedSelectedTypes.length > 0) {
        filteredClothes = filteredClothes.filter(product =>
            appliedSelectedTypes.includes(product.clothe_type)
        );
    }

    if (appliedSelectedColors.length > 0) {
        filteredClothes = filteredClothes.filter(product =>
            appliedSelectedColors.some(color =>
                product.color.toLowerCase() === color.toLowerCase()
            )
        );
    }

    const toggleTypeSelection = (type: string) => {
        setInternalSelectedTypes(prevTypes =>
            prevTypes.includes(type)
                ? prevTypes.filter(t => t !== type)
                : [...prevTypes, type]
        );
    };

    const toggleColorSelection = (color: string) => {
        setInternalSelectedColors(prev =>
            prev.includes(color)
                ? prev.filter(c => c !== color)
                : [...prev, color]
        );
    };

    const totalPages = Math.ceil(filteredClothes.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentClothes = filteredClothes.slice(startIndex, endIndex);

    return (
        <Fragment>
            <section className={styles.container}>
                <CategoryNavigation categoryType={categoryType} />
                <section className={styles.categoryArea}>
                    <ClothesFilter
                        clothes={clothes}
                        toggleTypeSelection={toggleTypeSelection}
                        selectedTypes={internalSelectedTypes}
                        setPriceRange={setInternalPriceRange}
                        priceRange={internalPriceRange}
                        selectedColors={internalSelectedColors}
                        toggleColorSelection={toggleColorSelection}
                        handlerApplyFilters={handlerApplyFilters}
                    />
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
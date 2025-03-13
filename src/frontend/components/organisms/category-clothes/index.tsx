import { Fragment, useState } from "react";
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
    const [priceRange, setPriceRange] = useState<number[]>([0, 350]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    let filteredClothes = clothes.filter(product =>
        Number(product.price) >= priceRange[0] && Number(product.price) <= priceRange[1]
    );

    if (selectedTypes.length > 0) {
        filteredClothes = filteredClothes.filter(product =>
            selectedTypes.includes(product.clothe_type)
        );
    }

    if (selectedColors.length > 0) {
        filteredClothes = filteredClothes.filter(product =>
            selectedColors.some(color => product.color.toLowerCase() === color.toLowerCase())
        );
    }

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(filteredClothes.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentClothes = filteredClothes.slice(startIndex, endIndex);

    const toggleTypeSelection = (type: string) => {
        setSelectedTypes(prevTypes =>
            prevTypes.includes(type) ? prevTypes.filter(t => t !== type) : [...prevTypes, type]
        );
    };

    const toggleColorSelection = (color: string) => {
        setSelectedColors(prev =>
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };

    return (
        <Fragment>
            <section className={styles.container}>
                <CategoryNavigation categoryType={categoryType} />
                <section className={styles.categoryArea}>
                    <ClothesFilter
                        clothes={clothes}
                        toggleTypeSelection={toggleTypeSelection}
                        selectedTypes={selectedTypes}
                        setPriceRange={setPriceRange}
                        priceRange={priceRange}
                        selectedColors={selectedColors}
                        toggleColorSelection={toggleColorSelection}
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

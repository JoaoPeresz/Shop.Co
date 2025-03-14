import { Fragment } from "react";
import styles from "./clothes-sort-count.module.css";
import IconArrowDonw from "@/src/frontend/components/atoms/icon-arrow-donw";
import ProductDTO from "@/src/models/products-dto";

type Props = {
    categoryType: string;
    clothes: ProductDTO[];
    currentPage: number;
    itemsPerPage: number;
};

export default function ClothesSortCount({ categoryType, clothes, currentPage, itemsPerPage }: Props) {
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, clothes.length);

    return (
        <Fragment>
            <section className={styles.infos}>
                <h1 className={styles.categoryType}>{categoryType}</h1>
                <section className={styles.dataClothes}>
                    <h3>
                        Showing {start} - {end} of {clothes.length} Products
                    </h3>
                    <h3>
                        Sort by:
                        <span style={{ color: "#000000" }}> Most Popular </span>
                        <IconArrowDonw />
                    </h3>
                </section>
            </section>
        </Fragment>
    );
}

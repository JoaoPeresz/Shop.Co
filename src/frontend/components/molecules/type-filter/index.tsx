import { Fragment } from "react";
import styles from "./type-filter.module.css";
import ProductDTO from "@/src/models/products-dto";
import IconArrowRigth from "@/src/frontend/components/atoms/icon-arrow-rigth";

type Props = {
    clothes: ProductDTO[],
    onTypeSelect: (type: string) => void,
    selectedTypes: string[]
};

export default function TypeFilter({ clothes, onTypeSelect, selectedTypes }: Props) {
    const types = Array.from(new Set(clothes.map((clothe: ProductDTO) => clothe.clothe_type)));

    return (
        <Fragment>
            <section className={styles.filterClotheType}>
                {types.map((type, index) => (
                    <div
                        className={`${styles.filterType} ${selectedTypes.includes(type) ? styles.selected : ""}`}
                        key={index}
                        onClick={() => onTypeSelect(type)}
                    >
                        <span>{type}</span>
                        <IconArrowRigth />
                    </div>
                ))}
            </section>
        </Fragment>
    );
}
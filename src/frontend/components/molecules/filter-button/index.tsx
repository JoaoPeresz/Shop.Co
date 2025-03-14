import {Fragment} from "react";
import styles from "./filter-button.module.css"

type Props = {
    handlerApplyFilters: () => void;
}

export default function FilterButton ({handlerApplyFilters} : Props) {
    return (
        <Fragment>
            <section className={styles.containerButton} onClick={handlerApplyFilters}>
                Apply Filter
            </section>
        </Fragment>
    )
}
import {Fragment} from "react";
import styles from "./reviews-funcionalitys.module.css"
import ReviewsDTO from "@/src/models/reviews-dto";

type Props = {
    reviews?: ReviewsDTO[];
}

export default function ReviewsFilters ({reviews} : Props) {
    return (
        <Fragment>
            <section className={styles.containerFilters}>
                <section className={styles.counter}>
                    <h1 className={styles.allReviews}>All Reviews</h1>
                    <h3 className={styles.counterReview}>({reviews?.length})</h3>
                </section>
            </section>
        </Fragment>
    )
}
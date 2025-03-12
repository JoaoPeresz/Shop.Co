import {Fragment} from "react";
import styles from "./all-reviews.module.css"
import FloatTabNavigator from "@/src/frontend/components/molecules/float-tab-navigator";
import ReviewsDTO from "@/src/models/reviews-dto";

type Props = {
    ratingImage: { [id: string]: string };
    dataReviews?: ReviewsDTO[];
}

export default function AllReviews ({dataReviews, ratingImage} : Props) {
    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <FloatTabNavigator dataReviews={dataReviews} ratingImage={ratingImage}/>
                </section>
            </section>
        </Fragment>
    )
}
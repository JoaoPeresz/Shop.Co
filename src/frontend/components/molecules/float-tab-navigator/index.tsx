import { Fragment, useState } from "react";
import styles from "./float-tab-navigator.module.css";
import ReviewsDTO from "@/src/models/reviews-dto";
import CardReview from "@/src/frontend/components/molecules/card-review";
import ReviewsFilters from "@/src/frontend/components/molecules/reviews-filters";
import reviews from "@/src/backend/service/reviews";

type Props = {
    dataReviews?: ReviewsDTO[];
    ratingImage: { [id: string]: string };
}

export default function FloatTabNavigator({dataReviews, ratingImage} : Props) {
    const [selectedTab, setSelectedTab] = useState("reviews");

    return (
        <Fragment>
            <section className={styles.tabNavigator}>
                <div className={styles.tabHeader}>
                    <button
                        className={`${styles.tabButton} ${selectedTab === "details" ? styles.selected : styles.notSelected}`}
                        onClick={() => setSelectedTab("details")}
                    >
                        Product Details
                    </button>
                    <button
                        className={`${styles.tabButton} ${selectedTab === "reviews" ? styles.selected : styles.notSelected}`}
                        onClick={() => setSelectedTab("reviews")}
                    >
                        Rating & Reviews
                    </button>
                    <button
                        className={`${styles.tabButton} ${selectedTab === "faqs" ? styles.selected : styles.notSelected}`}
                        onClick={() => setSelectedTab("faqs")}
                    >
                        FAQs
                    </button>
                </div>
                <div className={styles.indicator}>
                    <div className={`${styles.indicatorPart} ${selectedTab === "details" ? styles.active : styles.inactive}`}/>
                    <div className={`${styles.indicatorPart} ${selectedTab === "reviews" ? styles.active : styles.inactive}`}/>
                    <div className={`${styles.indicatorPart} ${selectedTab === "faqs" ? styles.active : styles.inactive}`}/>
                </div>
                {selectedTab === "reviews" && (
                    <section className={styles.reviews}>
                        <ReviewsFilters reviews={dataReviews} />
                        {dataReviews && dataReviews.map((review, index) => (
                            <div key={review.id}>
                                <CardReview review={review} index={index} ratingImage={ratingImage}/>
                            </div>
                        ))}
                    </section>
                )}
            </section>
        </Fragment>
    );
}

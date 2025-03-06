import { Fragment, useState } from 'react';
import styles from "./good-reviews.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function GoodReviews() {
    const reviews = [
        {
            name: "Emily R.",
            review: "Shop.co has completely transformed my shopping experience. The quality, the fit, and the customer service are all top-notch. I can't recommend them enough!",
            ratingImage: "assets/home-page/rating-5.png",
            checkedImage: "assets/home-page/checked.png"
        },
        {
            name: "Sarah M.",
            review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
            ratingImage: "assets/home-page/rating-5.png",
            checkedImage: "assets/home-page/checked.png"
        },
        {
            name: "Alex K.",
            review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
            ratingImage: "assets/home-page/rating-5.png",
            checkedImage: "assets/home-page/checked.png"
        },
        {
            name: "James L.",
            review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
            ratingImage: "assets/home-page/rating-5.png",
            checkedImage: "assets/home-page/checked.png"
        },
        {
            name: "Olivia T.",
            review: "I've never felt more confident in my outfits since shopping at Shop.co. Their pieces are stylish, comfortable, and make me feel amazing every time I wear them!",
            ratingImage: "assets/home-page/rating-5.png",
            checkedImage: "assets/home-page/checked.png"
        }
    ];


    const [currentCards, setCurrentCards] = useState([0, 1, 2, 3, 4]);
    const [offset, setOffset] = useState(0);
    const [transitionStyle, setTransitionStyle] = useState('transform 0.5s ease');

    const CARD_OFFSET = 420;

    const rotateCarousel = (direction: 'previous' | 'next') => {
        const translateX = direction === 'next' ? -CARD_OFFSET : CARD_OFFSET;

        setTransitionStyle('transform 0.5s ease');
        setOffset(translateX);

        setTimeout(() => {
            setTransitionStyle('none');
            setCurrentCards(prevState =>
                direction === 'next' ? (
                    [...prevState.slice(1), prevState[0]]
                ) : (
                    [prevState[prevState.length - 1], ...prevState.slice(0, prevState.length - 1)]
                )
            );
            setOffset(0);

            setTimeout(() => {
                setTransitionStyle('transform 0.5s ease');
            }, 50);
        }, 500);
    };


    return (
        <Fragment>
            <section className={styles.containerHappyCustomers}>
                <section className={styles.happyCustomers}>
                    <section className={styles.menuHappyCustomers}>
                        <h1 className={styles.title}>OUR HAPPY CUSTOMERS</h1>
                        <section className={styles.arrowsHappyCustomers}>
                            <ArrowBackIcon fontSize={"large"} onClick={() => rotateCarousel('previous')} />
                            <ArrowForwardIcon fontSize={"large"} onClick={() => rotateCarousel('next')} />
                        </section>
                    </section>
                    <article
                        className={styles.containerGoodReviews}
                        id="carousel-container"
                        style={{ transform: `translateX(${offset}px)`, transition: transitionStyle }}
                    >
                        {currentCards.map((cardIndex) => {
                            const review = reviews[cardIndex];
                            return (
                                <article key={cardIndex} className={styles.cardReviews}>
                                    <section className={styles.containerBoxReviews}>
                                        <img src={review.ratingImage} alt="review" />
                                        <section className={styles.dataReviewer}>
                                            <h1 className={styles.titleReviewer}>{review.name}</h1>
                                            <img src={review.checkedImage} alt="checked" />
                                        </section>
                                        <h3 className={styles.reviewText}>{review.review}</h3>
                                    </section>
                                </article>
                            );
                        })}
                    </article>
                </section>
            </section>
        </Fragment>
    );
}

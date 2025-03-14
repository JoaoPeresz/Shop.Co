import { Fragment, useEffect, useState } from "react";
import HomePageHeader from "@/src/frontend/components/organisms/home-page-header";
import ClotheDetails from "@/src/frontend/components/organisms/clothe-details";
import styles from "./product-detail-page.module.css";
import {findClotheById, getAllClothes} from "@/api/axios/api-clothes";
import ProductDTO from "@/src/models/products-dto";
import {getClotheImages, getReviewsImages} from "@/api/axios/api-images";
import AllReviews from "@/src/frontend/components/organisms/all-reviews";
import {getAllReviews} from "@/api/axios/api-reviews";
import ReviewsDTO from "@/src/models/reviews-dto";
import ClothesSection from "@/src/frontend/components/organisms/clothes-section";
import ProductsDTO from "@/src/models/products-dto";
import Footer from "@/src/frontend/components/organisms/footer";
import { useRouter } from "next/navigation";
import Skeleton from "@mui/material/Skeleton";

type Props = {
    clotheId: string;
};

export default function ProductDetailPage({ clotheId }: Props) {
    const [clothe, setClothe] = useState<ProductDTO | null>(null);
    const [clotheImage, setClotheImage] = useState<{ [id: string]: string }>({});
    const [ratingImages, setRatingImages] = useState<{ [id: string]: string }>({});
    const [reviews, setReviews] = useState<ReviewsDTO[]>([]);
    const [ratingUserImage, setRatingUserImage] = useState<{ [id: string]: string }>({});
    const [alsoLikeClothes, setAlsoLikeClothes] = useState<ProductDTO[]>([]);
    const [images, setImages] = useState<{ [id: string]: string }>({});
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const fetchClothe = async () => {
            try {
                setLoading(true);

                if (!clotheId) return;

                const imagesMap: { [id: string]: string } = {};
                const ratingsMap: { [id: string]: string } = {};

                const dataClothe = await findClotheById(clotheId);
                setClothe(dataClothe);

                try {
                    const { clotheImage, ratingImage } = await getClotheImages(clotheId);
                    imagesMap[clotheId] = clotheImage;
                    ratingsMap[clotheId] = ratingImage;
                } catch (error) {
                    console.error(`Erro ao buscar imagens para a roupa ${clotheId}:`, error);
                }

                setClotheImage(imagesMap);
                setRatingImages(ratingsMap);

                const dataReviews = await getAllReviews();
                const ratingsReviewMap: { [id: string]: string } = {};

                await Promise.all(
                    dataReviews.map(async (review: ReviewsDTO) => {
                        try {
                            const { ratingImage } = await getReviewsImages(review.id);
                            ratingsReviewMap[review.id] = ratingImage;
                        } catch (error) {
                            console.error(`Error fetching images for clothe ${review.id}:`, error);
                        }
                    })
                );

                setReviews(dataReviews);
                setRatingUserImage(ratingsReviewMap);

                const dataClothes = await getAllClothes();
                await Promise.all(
                    dataClothes.map(async (clothe: ProductDTO) => {
                        try {
                            const { clotheImage, ratingImage } = await getClotheImages(clothe.id);
                            imagesMap[clothe.id] = clotheImage;
                            ratingsMap[clothe.id] = ratingImage;
                        } catch (error) {
                            console.error(`Error fetching images for clothe ${clothe.id}:`, error);
                        }
                    })
                );

                setImages(imagesMap);
                setRatingImages(ratingsMap);
                setAlsoLikeClothes(dataClothes.filter((clothe: ProductDTO) => clothe.might_like));

            } catch (error) {
                console.error("Erro ao buscar a roupa:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClothe();
    }, [clotheId]);

    const handlerProductDetails = (clotheID: string) => {
        router.push(`/product-details/${clotheID}`);
    };

    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.containerBox}>
                    <HomePageHeader />
                    <ClotheDetails
                        clothe={clothe}
                        ratingImage={ratingImages}
                        clotheImage={clotheImage}
                    />
                    <AllReviews
                        dataReviews={reviews}
                        ratingImage={ratingUserImage}
                    />
                    <section className={styles.alsoLikeSection}>
                        {loading ? (
                            <section className={styles.containerSkeleton}>
                                <section>
                                    <Skeleton width="550px" height={60} sx={{mt: 1}}/>
                                </section>
                                <div className={styles.skeletonGrid}>
                                    {Array.from(new Array(4)).map((_, index) => (
                                        <div key={index} className={styles.skeletonCard}>
                                            <Skeleton
                                                variant="rectangular"
                                                sx={{
                                                    width: '295px',
                                                    height: '298px',
                                                    borderRadius: '8px'
                                                }}
                                            />
                                            <Skeleton width="70%" height={27} sx={{mt: 1}}/>
                                            <Skeleton width="70%" height={27} sx={{mt: 1}}/>
                                            <Skeleton width="40%" height={19}/>
                                            <Skeleton width="30%" height={32} sx={{mt: 0.5}}/>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : (
                            <ClothesSection
                                handlerProductDetails={handlerProductDetails}
                                title="You might also like"
                                products={alsoLikeClothes}
                                clotheImage={images}
                                ratingImage={ratingImages}
                                buttonApears={false}
                            />
                        )}
                    </section>

                    <Footer />
                </div>
            </div>
        </Fragment>
    );
}
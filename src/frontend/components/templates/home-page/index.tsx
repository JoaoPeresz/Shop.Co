import {Fragment, useEffect, useState} from "react";
import styles from "./home-page.module.css"
import HomePageHeader from "@/src/frontend/components/organisms/home-page-header";
import HomePageBanner from "@/src/frontend/components/organisms/home-page-banner";
import Brands from "@/src/frontend/components/organisms/brands";
import ClothesSection from "src/frontend/components/organisms/clothes-section";
import ProductsDTO from "@/src/models/products-dto";
import BrowseStyle from "@/src/frontend/components/organisms/browse-style";
import GoodReviews from "@/src/frontend/components/organisms/good-reviews";
import Footer from "@/src/frontend/components/organisms/footer";
import {getAllClothes} from "@/api/axios/api-clothes";
import {getClotheImages} from "@/api/axios/api-images";
import {useRouter} from "next/navigation";
import Skeleton from "@mui/material/Skeleton";

export default function HomePage() {
    const [arrivals, setArrivals] = useState<ProductsDTO[]>([]);
    const [topSellings, setTopSellings] = useState<ProductsDTO[]>([]);
    const [images, setImages] = useState<{ [id: string]: string }>({});
    const [ratingImages, setRatingImages] = useState<{ [id: string]: string }>({});
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const fetchClothes = async () => {
            try {
                const dataClothes = await getAllClothes();

                const imagesMap: { [id: string]: string } = {};
                const ratingsMap: { [id: string]: string } = {};

                await Promise.all(
                    dataClothes.map(async (clothe: ProductsDTO) => {
                        try {
                            const {clotheImage, ratingImage} = await getClotheImages(clothe.id);
                            imagesMap[clothe.id] = clotheImage;
                            ratingsMap[clothe.id] = ratingImage;
                        } catch (error) {
                            console.error(`Error fetching images for clothe ${clothe.id}:`, error);
                        }
                    })
                );

                setImages(imagesMap);
                setRatingImages(ratingsMap);

                setArrivals(dataClothes.filter((clothe: ProductsDTO) => clothe.is_arrival));
                setTopSellings(dataClothes.filter((clothe: ProductsDTO) => clothe.is_top_selling));
            } catch (error) {
                console.error("Error fetching clothes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClothes();
    }, []);

    const handlerProductDetails = (clotheID: string) => {
        router.push(`/product-details/${clotheID}`)
    }

    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <HomePageHeader/>
                    <HomePageBanner/>
                    <Brands/>
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
                            title="NEW ARRIVALS"
                            products={arrivals}
                            clotheImage={images}
                            ratingImage={ratingImages}
                            handlerProductDetails={handlerProductDetails}
                            buttonApears={true}
                        />
                    )}
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
                            title="TOP SELLING"
                            products={topSellings}
                            clotheImage={images}
                            ratingImage={ratingImages}
                            handlerProductDetails={handlerProductDetails}
                            buttonApears={true}
                        />
                    )}
                    <BrowseStyle/>
                    <GoodReviews/>
                    <Footer/>
                </section>
            </section>
        </Fragment>
    );
}
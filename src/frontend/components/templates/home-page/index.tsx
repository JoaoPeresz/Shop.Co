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
import { useRouter } from "next/navigation";

export default function HomePage() {
    const [arrivals, setArrivals] = useState<ProductsDTO[]>([]);
    const [topSellings, setTopSellings] = useState<ProductsDTO[]>([]);
    const [images, setImages] = useState<{ [id: string]: string }>({});
    const [ratingImages, setRatingImages] = useState<{ [id: string]: string }>({});

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

                setArrivals(dataClothes.filter((clothe: ProductsDTO) => clothe.is_arrival));
                setTopSellings(dataClothes.filter((clothe: ProductsDTO) => clothe.is_top_selling));
            } catch (error) {
                console.error("Error fetching clothes:", error);
            }
        };

        fetchClothes();
    }, []);

const handlerProductDetails = (clotheID: string) => {
    router.push(`/product-details/${clotheID}`)
}

    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.containerBox}>
                    <HomePageHeader/>
                    <HomePageBanner/>
                    <Brands/>
                    <ClothesSection
                        title="NEW ARRIVALS"
                        products={arrivals}
                        clotheImage={images}
                        ratingImage={ratingImages}
                        handlerProductDetails={handlerProductDetails}
                        buttonApears={true}
                    />
                    <ClothesSection
                        title="TOP SELLING"
                        products={topSellings}
                        clotheImage={images}
                        ratingImage={ratingImages}
                        handlerProductDetails={handlerProductDetails}
                        buttonApears={true}
                    />
                    <BrowseStyle/>
                    <GoodReviews/>
                    <Footer/>
                </div>
            </div>
        </Fragment>
    );
}
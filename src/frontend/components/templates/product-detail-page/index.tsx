import { Fragment, useEffect, useState } from "react";
import HomePageHeader from "@/src/frontend/components/organisms/home-page-header";
import ClotheDetails from "@/src/frontend/components/organisms/clothe-details";
import styles from "./product-detail-page.module.css";
import { findClotheById } from "@/api/axios/api-clothes";
import ProductDTO from "@/src/models/products-dto";
import { getClotheImages } from "@/api/axios/api-images";
import AllReviews from "@/src/frontend/components/organisms/all-reviews";
import {getAllReviews} from "@/api/axios/api-reviews";

type Props = {
    clotheId: string;
};

export default function ProductDetailPage({ clotheId }: Props) {
    const [clothe, setClothe] = useState<ProductDTO | null>(null);
    const [clotheImage, setClotheImage] = useState<{ [id: string]: string }>({});
    const [ratingImages, setRatingImages] = useState<{ [id: string]: string }>({});

    useEffect(() => {
        const fetchClothe = async () => {
            try {
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

                console.log(dataReviews,"mostrando");


            } catch (error) {
                console.error("Erro ao buscar a roupa:", error);
            }
        };

        fetchClothe();
    }, [clotheId]);

    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.containerBox}>
                    <HomePageHeader/>
                    <ClotheDetails clothe={clothe} ratingImage={ratingImages} />
                    <AllReviews/>
                </div>
            </div>
        </Fragment>
    );
}

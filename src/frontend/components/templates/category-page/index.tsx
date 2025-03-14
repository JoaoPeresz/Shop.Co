import {Fragment, useEffect, useState} from "react";
import styles from "./category-page.module.css"
import Footer from "@/src/frontend/components/organisms/footer";
import HomePageHeader from "@/src/frontend/components/organisms/home-page-header";
import CategoryClothes from "@/src/frontend/components/organisms/category-clothes";
import {getAllClothes} from "@/api/axios/api-clothes";
import ProductDTO from "@/src/models/products-dto";
import ProductsDTO from "@/src/models/products-dto";
import {getClotheImages} from "@/api/axios/api-images";

type Props = {
    categoryType: string;
}

export default function CategoryPage({categoryType} : Props) {

    const [clotes, setclotes] = useState<ProductDTO[]>([])
    const [images, setImages] = useState<{ [id: string]: string }>({});
    const [ratingImages, setRatingImages] = useState<{ [id: string]: string }>({});
    const [loading, setLoading] = useState(true);


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

                setclotes(dataClothes)
            } catch (error) {
                console.error("Error fetching clothes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClothes();
    }, []);

    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <HomePageHeader/>
                    <div className={styles.bottomBar}/>
                    <CategoryClothes
                        loading={loading}
                        categoryType={categoryType}
                        clothes={clotes}
                        clotheImage={images}
                        ratingImage={ratingImages}
                    />
                    <Footer/>
                </section>
            </section>
        </Fragment>
    )
}
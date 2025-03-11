import { Fragment, useEffect, useState } from "react";
import HomePageHeader from "@/src/frontend/components/organisms/home-page-header";
import Footer from "@/src/frontend/components/organisms/footer";
import ClotheDetails from "@/src/frontend/components/organisms/clothe-details";
import styles from "./product-detail-page.module.css";
import { findClotheById } from "@/api/axios/api-clothes";
import ProductDTO from "@/src/models/products-dto";

type Props = {
    clotheId: string;
};

export default function ProductDetailPage({ clotheId }: Props) {
    const [clothe, setClothe] = useState<ProductDTO>();

    useEffect(() => {
        const fetchClothe = async () => {
            try {
                if (clotheId) {
                    const dataClothe = await findClotheById(clotheId);
                    setClothe(dataClothe);
                    // setClothe(dataClothe);
                }
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
                    <HomePageHeader />
                    <ClotheDetails clothe={clothe} />
                    {/*<Footer />*/}
                </div>
            </div>
        </Fragment>
    );
}

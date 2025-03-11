import {Fragment, useEffect, useState} from "react";
import HomePageHeader from "@/src/frontend/components/organisms/home-page-header";
import Footer from "@/src/frontend/components/organisms/footer";
import styles from "./product-detail-page.module.css";
import ClotheDetails from "@/src/frontend/components/organisms/clothe-details";
import {findClotheById} from "@/api/axios/api-clothes";
import ProductDTO from "@/src/models/products-dto";
import {useParams} from "next/navigation";

export default function ProductDetailPage () {

    const { id } = useParams();
    const [clothe, setClothe] = useState<ProductDTO | null>(null);

    useEffect(() => {
        console.log(id)
        const fetchClothe = async () => {
            try {
                if (id) {
                    const data = await findClotheById(id);
                    setClothe(data);
                }
            } catch (error) {
                console.error("Error fetching clothe:", error);
            }
        };

        fetchClothe();
    }, [id]);

    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.containerBox}>
                    <HomePageHeader/>
                    <ClotheDetails/>
                    <Footer/>
                </div>
            </div>
        </Fragment>
)
}
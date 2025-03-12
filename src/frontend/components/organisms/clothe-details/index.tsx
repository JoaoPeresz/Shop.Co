import { Fragment } from "react";
import styles from "./clothe-details.module.css";
import ClothesImages from "@/src/frontend/components/molecules/clothes-images";
import ClothesInfos from "@/src/frontend/components/molecules/clothes-infos";
import ProductDTO from "@/src/models/products-dto";

type Props = {
    clothe: ProductDTO | null;
    ratingImage: { [id: string]: string };
};

export default function ClotheDetails({ clothe, ratingImage }: Props) {
    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <ClothesImages />
                    {clothe && (
                        <ClothesInfos
                            clothe={clothe}
                            ratingImage={ratingImage[clothe.id] || ""}
                        />
                    )}
                </section>
            </section>
        </Fragment>
    );
}

import { Fragment, useState } from "react";
import styles from "./clothes-images.module.css";
import SideImages from "@/src/frontend/components/atoms/side-images";
import ViewImage from "@/src/frontend/components/atoms/view-image";
import imageFront from "../../../../../public/assets/product-details/image-front.png";
import {StaticImageData} from "next/image";

export default function ClothesImages() {
    const [selectedImage, setSelectedImage] = useState(imageFront);

    const handleImageClick = (image: StaticImageData) => {
        setSelectedImage(image);
    };

    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <SideImages onImageClick={handleImageClick} />
                    <ViewImage image={selectedImage} />
                </section>
            </section>
        </Fragment>
    );
}

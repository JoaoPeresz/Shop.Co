import { Fragment } from "react";
import styles from "./side-images.module.css";
import Image, {StaticImageData} from "next/image";
import imageFront from "../../../../../public/assets/product-details/image-front.png";
import imageBack from "../../../../../public/assets/product-details/image-back.png";
import imagePerson from "../../../../../public/assets/product-details/people-image.png";

interface SideImagesProps {
    onImageClick: (image: StaticImageData) => void;
}

export default function SideImages({ onImageClick }: SideImagesProps) {
    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox} onClick={() => onImageClick(imageFront)}>
                    <Image src={imageFront} alt="clothe-image" />
                </section>
                <section className={styles.containerBox} onClick={() => onImageClick(imageBack)}>
                    <Image src={imageBack} alt="clothe-image" />
                </section>
                <section className={styles.containerBox} onClick={() => onImageClick(imagePerson)}>
                    <Image src={imagePerson} alt="clothe-image" />
                </section>
            </section>
        </Fragment>
    );
}

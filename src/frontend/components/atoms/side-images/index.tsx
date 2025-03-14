import { Fragment } from "react";
import styles from "./side-images.module.css";
import Image, { StaticImageData } from "next/image";
import imageFront from "../../../../../public/assets/product-details/image-front.png"
import imageBack from "../../../../../public/assets/product-details/image-back.png";
import imagePerson from "../../../../../public/assets/product-details/people-image.png";

interface SideImagesProps {
    onImageClick: (image: StaticImageData | string) => void;
    clotheImage: StaticImageData | string;
}

export default function SideImages({ onImageClick, clotheImage }: SideImagesProps) {
    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox} onClick={() => onImageClick(clotheImage)}>
                    <Image src={clotheImage ? clotheImage : imageFront} alt="clothe-image" width={200} height={200} />
                </section>
                <section className={styles.containerBox} onClick={() => onImageClick(imageBack)}>
                    <Image src={imageBack} alt="clothe-image" width={200} height={200} />
                </section>
                <section className={styles.containerBox} onClick={() => onImageClick(imagePerson)}>
                    <Image src={imagePerson} alt="clothe-image" width={200} height={200} />
                </section>
            </section>
        </Fragment>
    );
}

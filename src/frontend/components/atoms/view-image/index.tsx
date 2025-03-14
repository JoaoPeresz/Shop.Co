import { Fragment } from "react";
import styles from "./view-image.module.css";
import Image, { StaticImageData } from "next/image";
import imageFront from "../../../../../public/assets/product-details/image-front.png"

interface ViewImageProps {
    image: StaticImageData | string;
}

export default function ViewImage({ image }: ViewImageProps) {
    return (
        <Fragment>
            <div className={styles.image}>
                <Image
                    width={444}
                    height={600}
                    src={image ? image : imageFront}
                    alt="Selected clothe image"
                />
            </div>
        </Fragment>
    );
}

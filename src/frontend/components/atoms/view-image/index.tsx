import { Fragment } from "react";
import styles from "./view-image.module.css";
import Image, {StaticImageData} from "next/image";

interface ViewImageProps {
    image: StaticImageData;
}

export default function ViewImage({ image }: ViewImageProps) {
    return (
        <Fragment>
            <div className={styles.image}>
                <Image width={444} src={image} alt="Selected clothe image" />
            </div>
        </Fragment>
    );
}

import { Fragment, useState, useEffect } from "react";
import styles from "./clothes-images.module.css";
import SideImages from "@/src/frontend/components/atoms/side-images";
import ViewImage from "@/src/frontend/components/atoms/view-image";
import { StaticImageData } from "next/image";

type Props = {
    clotheImage: StaticImageData | string;
};

export default function ClothesImages({ clotheImage }: Props) {
    const [selectedImage, setSelectedImage] = useState<StaticImageData | string>(clotheImage);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        setSelectedImage(clotheImage);
    }, [clotheImage]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleImageClick = (image: StaticImageData | string) => {
        setSelectedImage(image);
    };

    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    {windowWidth < 1080 ? (
                        <>
                            <ViewImage image={selectedImage} />
                            <SideImages onImageClick={handleImageClick} clotheImage={clotheImage} />
                        </>
                    ) : (
                        <>
                            <SideImages onImageClick={handleImageClick} clotheImage={clotheImage} />
                            <ViewImage image={selectedImage} />
                        </>
                    )}
                </section>
            </section>
        </Fragment>
    );
}

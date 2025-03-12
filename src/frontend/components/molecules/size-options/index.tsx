import { Fragment, useState } from "react";
import styles from "./size-options.module.css";

export default function SizeOptions() {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const sizes = ["Small", "Medium", "Large", "X-Large"];

    return (
        <Fragment>
            <section className={styles.sizeOptionsContainer}>
                {sizes.map((size) => (
                    <button
                        key={size}
                        className={`${styles.sizeOptionButton} ${selectedSize === size ? styles.selected : styles.deselected}`}
                        onClick={() => setSelectedSize(size)}
                    >
                        {size}
                    </button>
                ))}
            </section>
        </Fragment>
    );
}

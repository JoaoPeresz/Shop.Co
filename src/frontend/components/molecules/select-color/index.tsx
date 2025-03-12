import { useState } from "react";
import styles from "./select-color.module.css";
import IconCheck from "@/src/frontend/components/atoms/icon-check";

const colors = ["#4F4631", "#314F4A", "#31344F"];

export default function SelectColor() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    return (
        <section className={styles.colorContainer}>
            {colors.map((color, index) => (
                <section
                    key={index}
                    className={`${styles.colorSelectionButton} ${selectedIndex === index ? styles.selected : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedIndex(index)}
                >
                    {selectedIndex === index && <IconCheck/>}
                </section>
            ))}
        </section>
    );
}

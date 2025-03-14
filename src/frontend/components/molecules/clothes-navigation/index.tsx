import { Fragment } from "react";
import styles from "./clothes-navigation.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function ClothesNavigation({ currentPage, totalPages, onPageChange }: Props) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <Fragment>
            <section className={styles.navigate}>
                <div className={styles.containerButton} onClick={handlePrevious} style={{ cursor: "pointer" }}>
                    <ArrowBackIcon /> Previous
                </div>
                <section>
                    {pages.map((page) => (
                        <span
                            key={page}
                            onClick={() => onPageChange(page)}
                            style={{
                                cursor: "pointer",
                                margin: "0 5px",
                                fontWeight: currentPage === page ? "bold" : "normal",
                            }}
                        >
              {page}
            </span>
                    ))}
                </section>
                <div className={styles.containerButton} onClick={handleNext} style={{ cursor: "pointer" }}>
                    Next <ArrowForwardIcon />
                </div>
            </section>
        </Fragment>
    );
}

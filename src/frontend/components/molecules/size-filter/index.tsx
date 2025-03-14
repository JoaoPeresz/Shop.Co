import { Fragment, useState } from "react";
import styles from "./size-filter.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import IconArrowDonw from "@/src/frontend/components/atoms/icon-arrow-donw";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function SizeFilter() {
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const sizes = [
        "XX-small", "X-small", "Small", "Medium", "Large",
        "X-Large", "XX-large", "3X-Large", "4x-large"
    ];

    const handleButtonClick = (size: string) => {
        setSelectedSizes((prevSelectedSizes) => {
            if (prevSelectedSizes.includes(size)) {
                return prevSelectedSizes.filter(item => item !== size);
            } else {
                return [...prevSelectedSizes, size];
            }
        });
    };

    return (
        <Fragment>
            <Accordion
                className={styles.accordion}
                sx={{
                    width: "100%",
                    border: "none",
                    boxShadow: "none",
                    "&::before": { display: "none" },
                    marginBottom: "-12px",
                    marginTop: "-12px",
                }}
            >
                <AccordionSummary
                    expandIcon={<IconArrowDonw />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        background: "none",
                        border: "none",
                        boxShadow: "none",
                    }}
                >
                    <Typography
                        component="span"
                        sx={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "20px",
                            lineHeight: "27px",
                        }}
                    >
                        Size
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        background: "none",
                        border: "none",
                        boxShadow: "none",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        justifyContent: "center",
                    }}
                >
                    <div className={styles.containerButton}>
                        {sizes.map((size, index) => (
                            <section
                                key={index}
                                className={`${styles.containerBoxButton} ${
                                    selectedSizes.includes(size) ? styles.selected : ""
                                }`}
                                onClick={() => handleButtonClick(size)}
                            >
                                {size}
                            </section>
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
        </Fragment>
    );
}

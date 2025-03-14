import { Fragment, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import IconArrowDonw from "@/src/frontend/components/atoms/icon-arrow-donw";
import IconArrowRigth from "@/src/frontend/components/atoms/icon-arrow-rigth";
import styles from "./dress-style-fllter.module.css";

export default function DressStyleFllter() {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const dressStyles = ["Casual", "Formal", "Party", "Gym"];

    const toggleTypeSelection = (type: string) => {
        setSelectedTypes(prevTypes =>
            prevTypes.includes(type)
                ? prevTypes.filter(t => t !== type)
                : [...prevTypes, type]
        );
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
                        Dress Style
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
                    <section className={styles.filterClotheType}>
                        {dressStyles.map((type, index) => (
                            <div
                                key={index}
                                className={`${styles.filterType} ${selectedTypes.includes(type) ? styles.selected : ""}`}
                                onClick={() => toggleTypeSelection(type)}
                            >
                                <span>{type}</span>
                                <IconArrowRigth />
                            </div>
                        ))}
                    </section>
                </AccordionDetails>
            </Accordion>
        </Fragment>
    );
}

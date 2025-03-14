import { Fragment } from "react";
import styles from "./type-filter.module.css";
import ProductDTO from "@/src/models/products-dto";
import IconArrowRigth from "@/src/frontend/components/atoms/icon-arrow-rigth";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import * as React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";

type Props = {
    clothes: ProductDTO[],
    onTypeSelect: (type: string) => void,
    selectedTypes: string[]
};

export default function TypeFilter({ clothes, onTypeSelect, selectedTypes }: Props) {
    const types = Array.from(new Set(clothes.map((clothe: ProductDTO) => clothe.clothe_type)));

    return (
        <Fragment>
            <Accordion
                className={styles.accordion}
                sx={{
                    width: "100%",
                    border: "none",
                    boxShadow: "none",
                    "&::before": { display: "none" },
                    marginBottom: '-12px',
                    marginTop: '-12px'
                }}
            >
                <AccordionSummary
                    expandIcon={<TuneIcon fontSize={'large'} style={{color: '#00000066', cursor: 'pointer'}}/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        background: "none",
                        border: "none",
                        boxShadow: "none",
                    }}
                >
                    <Typography component="span"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    lineHeight: '27px'
                                }}
                    > Filters
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        background: "none",
                        border: "none",
                        boxShadow: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <section className={styles.filterClotheType}>
                        {types.map((type, index) => (
                            <div
                                className={`${styles.filterType} ${selectedTypes.includes(type) ? styles.selected : ""}`}
                                key={index}
                                onClick={() => onTypeSelect(type)}
                            >
                                <span>{type}</span>
                                <IconArrowRigth/>
                            </div>
                        ))}
                    </section>
                </AccordionDetails>
            </Accordion>
        </Fragment>
    );
}
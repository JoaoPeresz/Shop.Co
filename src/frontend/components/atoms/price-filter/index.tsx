import { Fragment } from "react";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import IconArrowDonw from "@/src/frontend/components/atoms/icon-arrow-donw";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styles from "./price-filter.module.css";

type PriceFilterProps = {
    onPriceChange: (newRange: number[]) => void;
    currentRange: number[];
};

export default function PriceFilter({ onPriceChange, currentRange }: PriceFilterProps) {
    const handleChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            onPriceChange(newValue);
        }
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
                        <Typography component="span"
                            sx={{
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "20px",
                                lineHeight: '27px'
                            }}
                        > Price
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
                        <Box sx={{ width: 247 }}>
                            <Slider
                                getAriaLabel={() => "Price range"}
                                value={currentRange}
                                onChange={handleChange}
                                valueLabelDisplay="on"
                                valueLabelFormat={(val) => `$${val}`}
                                min={0}
                                max={250}
                                disableSwap
                                sx={{
                                    color: "black",
                                    "& .MuiSlider-thumb": {
                                        color: "black",
                                        "&:hover, &.Mui-focusVisible": {
                                            boxShadow: "0px 0px 0px 8px rgba(0, 0, 0, 0.1)",
                                        },
                                        "&.Mui-active": {
                                            boxShadow: "0px 0px 0px 12px rgba(0, 0, 0, 0.1)",
                                        },
                                    },
                                    "& .MuiSlider-track": {
                                        color: "black",
                                    },
                                    "& .MuiSlider-rail": {
                                        color: "#b0b0b0",
                                    },
                                    "& .MuiSlider-valueLabel": {
                                        background: "none",
                                        color: "black",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                        transform: "translateY(36px)",
                                    },
                                }}
                            />
                        </Box>
                    </AccordionDetails>
            </Accordion>
        </Fragment>
    );
}

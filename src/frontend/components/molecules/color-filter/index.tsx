import { Fragment } from "react";
import Accordion from "@mui/material/Accordion";
import styles from "./color-filter.module.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import IconArrowDonw from "@/src/frontend/components/atoms/icon-arrow-donw";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import IconCheck from '@mui/icons-material/Check';

type ColorFilterProps = {
    selectedColors: string[];
    toggleColorSelection: (color: string) => void;
};

export default function ColorFilter({ selectedColors, toggleColorSelection }: ColorFilterProps) {
    // Array com 10 opções fixas, mapeando o valor do banco ("db") para a cor exibida ("ui")
    const uiColors = [
        { db: "Black", ui: "black" },
        { db: "White", ui: "white" },
        { db: "Orange", ui: "#F5DD06" },
        { db: "Dark-blue", ui: "#063AF5" },
        { db: "Light-blue", ui: "#06CAF5" },
        { db: "Orange", ui: "#F57906" },
        { db: "Pink", ui: "#F506A4" },
        { db: "Purple", ui: "#7D06F5" },
        { db: "Green", ui: "#00C12B" },
        { db: "Red", ui: "#F50606" }
    ];

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
                            lineHeight: '27px'
                        }}
                    >
                        Color
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
                    {uiColors.map((colorOption, index) => (
                        <button
                            key={index}
                            onClick={() => toggleColorSelection(colorOption.db)}
                            style={{
                                width: '37px',
                                height: '37px',
                                borderRadius: '50%',
                                backgroundColor: colorOption.ui,
                                border: selectedColors.includes(colorOption.db)
                                    ? '1px solid'
                                    : '1px solid #00000033',
                                position: 'relative',
                            }}
                        >
                            {selectedColors.includes(colorOption.db) && (
                                <IconCheck
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: 'white'
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </AccordionDetails>
            </Accordion>
        </Fragment>
    );
}

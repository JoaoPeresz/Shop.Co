import { Fragment, useState, useEffect } from "react";
import styles from "./clothes-filter.module.css";
import LineBar from "@/src/frontend/components/atoms/line-bar";
import TypeFilter from "@/src/frontend/components/molecules/type-filter";
import PriceFilter from "@/src/frontend/components/atoms/price-filter";
import ProductDTO from "@/src/models/products-dto";
import ColorFilter from "@/src/frontend/components/molecules/color-filter";
import SizeFilter from "@/src/frontend/components/molecules/size-filter";
import DressStyleFllter from "@/src/frontend/components/molecules/dress-style-fllter";
import FilterButton from "@/src/frontend/components/molecules/filter-button";
import TuneIcon from "@mui/icons-material/Tune";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from "@mui/icons-material/Close";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type Props = {
    clothes: ProductDTO[];
    toggleTypeSelection: (type: string) => void;
    selectedTypes: string[];
    setPriceRange: (range: number[]) => void;
    priceRange: number[];
    selectedColors: string[];
    toggleColorSelection: (color: string) => void;
    handlerApplyFilters: () => void;
};

export default function ClothesFilter({
                                          clothes,
                                          toggleTypeSelection,
                                          selectedTypes,
                                          setPriceRange,
                                          priceRange,
                                          selectedColors,
                                          toggleColorSelection,
                                          handlerApplyFilters
                                      }: Props) {
    const [isDesktop, setIsDesktop] = useState<boolean>(true);
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)

    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1081);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

if (!isDesktop) {
    return <Fragment>
        <TuneIcon
            onClick={handleOpen}
            fontSize="small"
            style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#F0F0F0",
                borderRadius: "50%",
                padding: "4px",
                cursor: "pointer",
            }}
        />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: "flex",
                alignItems: "flex-end",
                border: "none",
                overflowY: 'auto'
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "600px",
                    minHeight: "50vh",
                    maxHeight: "90vh",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: "12px 12px 0 0",
                    overflowY: "auto",
                    color: 'black'
                }}
            >
                <section className={styles.close}>
                    <CloseIcon fontSize={'large'} onClick={handleClose}/>
                </section>
                <section className={styles.containerFilters}>
                    <TypeFilter clothes={clothes} onTypeSelect={toggleTypeSelection}
                                selectedTypes={selectedTypes}/>
                    <LineBar/>
                    <PriceFilter onPriceChange={setPriceRange} currentRange={priceRange}/>
                    <LineBar/>
                    <ColorFilter selectedColors={selectedColors} toggleColorSelection={toggleColorSelection}/>
                    <LineBar/>
                    <SizeFilter/>
                    <LineBar/>
                    <DressStyleFllter/>
                    <FilterButton handlerApplyFilters={handlerApplyFilters}/>
                </section>

            </Box>
        </Modal>
    </Fragment>
}
    return (
        <Fragment>
            <section className={styles.containerFilters}>
                <TypeFilter clothes={clothes} onTypeSelect={toggleTypeSelection} selectedTypes={selectedTypes}/>
                <LineBar/>
                <PriceFilter onPriceChange={setPriceRange} currentRange={priceRange}/>
                <LineBar/>
                <ColorFilter selectedColors={selectedColors} toggleColorSelection={toggleColorSelection}/>
                <LineBar/>
                <SizeFilter/>
                <LineBar/>
                <DressStyleFllter/>
                <FilterButton handlerApplyFilters={handlerApplyFilters} />
            </section>
        </Fragment>
    );
}

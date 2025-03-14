import { Fragment } from "react";
import styles from "./clothes-filter.module.css";
import LineBar from "@/src/frontend/components/atoms/line-bar";
import TypeFilter from "@/src/frontend/components/molecules/type-filter";
import PriceFilter from "@/src/frontend/components/atoms/price-filter";
import ProductDTO from "@/src/models/products-dto";
import ColorFilter from "@/src/frontend/components/molecules/color-filter";
import SizeFilter from "@/src/frontend/components/molecules/size-filter";
import DressStyleFllter from "@/src/frontend/components/molecules/dress-style-fllter";
import FilterButton from "@/src/frontend/components/molecules/filter-button";

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
                <FilterButton handlerApplyFilters={handlerApplyFilters}/>
            </section>
        </Fragment>
    );
}

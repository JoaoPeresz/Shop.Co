import { Fragment } from "react";
import styles from "./clothes-filter.module.css";
import TuneIcon from "@mui/icons-material/Tune";
import LineBar from "@/src/frontend/components/atoms/line-bar";
import TypeFilter from "@/src/frontend/components/molecules/type-filter";
import PriceFilter from "@/src/frontend/components/atoms/price-filter";
import ProductDTO from "@/src/models/products-dto";
import ColorFilter from "@/src/frontend/components/molecules/color-filter";

type Props = {
    clothes: ProductDTO[];
    toggleTypeSelection: (type: string) => void;
    selectedTypes: string[];
    setPriceRange: (range: number[]) => void;
    priceRange: number[];
    selectedColors: string[];
    toggleColorSelection: (color: string) => void;
};

export default function ClothesFilter({
                                          clothes,
                                          toggleTypeSelection,
                                          selectedTypes,
                                          setPriceRange,
                                          priceRange,
                                          selectedColors,
                                          toggleColorSelection
                                      }: Props) {
    return (
        <Fragment>
            <section className={styles.containerFilters}>
                <section className={styles.filterTitle}>
                    Filters <TuneIcon fontSize={'large'} style={{color: '#00000066', cursor: 'pointer'}}/>
                </section>
                <LineBar/>
                <TypeFilter clothes={clothes} onTypeSelect={toggleTypeSelection} selectedTypes={selectedTypes}/>
                <LineBar/>
                <PriceFilter onPriceChange={setPriceRange} currentRange={priceRange}/>
                <LineBar/>
                <ColorFilter selectedColors={selectedColors} toggleColorSelection={toggleColorSelection}/>
            </section>
        </Fragment>
    );
}

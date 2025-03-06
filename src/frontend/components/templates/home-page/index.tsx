import {Fragment} from "react";
import styles from "./home-page.module.css"
import HomePageHeader from "@/src/frontend/components/organisms/home-page-header";
import HomePageBanner from "@/src/frontend/components/organisms/home-page-banner";
import Brands from "@/src/frontend/components/organisms/brands";
import ClothesSection from "src/frontend/components/organisms/clothes-section";
import ProductsDTO from "@/src/models/products-dto";
import BrowseStyle from "@/src/frontend/components/organisms/browse-style";
import GoodReviews from "@/src/frontend/components/organisms/good-reviews";
import Footer from "@/src/frontend/components/organisms/footer";

const arrivals: ProductsDTO[] = [
    {
        image: "/assets/home-page/T-shirt%20with%20Tape.png", // Corrigido
        title: "T-shirt with Tape Details",
        ratingImage: "/assets/home-page/rating-4.5.png", // Corrigido
        rating: "4.5/5",
        price: 120,
        previous: 0,
        discount: ""
    },
    {
        image: "/assets/home-page/Skinny%20Fit%20Jeans.png",
        title: "Skinny Fit Jeans",
        ratingImage: "/assets/home-page/rating-3.5.png",
        rating: "3.5/5",
        price: 240,
        previous: 260,
        discount: "-20%"
    },
    {
        image: "/assets/home-page/Checked%20Shirt.png",
        title: "Checkered Shirt",
        ratingImage: "/assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 180,
        previous: 0,
        discount: ""
    },
    {
        image: "/assets/home-page/Sleeve%20Striped.png",
        title: "Sleeve Striped T-shirt",
        ratingImage: "/assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 130,
        previous: 160,
        discount: "-30%"
    },
];

const topSelling: ProductsDTO[] = [
    {
        image: "assets/home-page/vertical-striped.png",
        title: "T-shirt with Tape Details",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 120,
        previous: 0,
        discount: ""
    },
    {
        image: "assets/home-page/courage-graphic.png",
        title: "Skinny Fit Jeans",
        ratingImage: "assets/home-page/rating-3.5.png",
        rating: "3.5/5",
        price: 240,
        previous: 260,
        discount: "-20%"
    },
    {
        image: "assets/home-page/loose-fit.png",
        title: "Checkered Shirt",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 180,
        previous: 0,
        discount: ""
    },
    {
        image: "assets/home-page/faded-skinny.png",
        title: "Sleeve Striped T-shirt",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 130,
        previous: 160,
        discount: "-30%"
    },
];

export default function HomePage () {
    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.containerBox}>
                    <HomePageHeader/>
                    <HomePageBanner/>
                    <Brands/>
                    <ClothesSection title={"NEW ARRIVALS"} products={arrivals}/>
                    <ClothesSection title={"TOP SELLING"} products={topSelling}/>
                    <BrowseStyle/>
                    <GoodReviews/>
                    <Footer/>
                </div>
            </div>
        </Fragment>
    )
}
import { Fragment, useState } from "react";
import styles from "./add-to-cart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDTO from "@/src/models/products-dto";

type Props = {
    clothe?: ProductDTO;
}

export default function AddToCart ({clothe} : Props) {
    const [counter, setCounter] = useState<number>(1);

    const increase = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrease = () => {
        if (counter > 1) {
            setCounter((prevCounter) => prevCounter - 1);
        }
    };

    const handleAddToCart = () => {
        toast.success(`${counter} item(s) of ${clothe?.name} added to cart!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    };

    return (
        <Fragment>
            <section className={styles.addCartContainer}>
                <section className={styles.addQuantityCounter}>
                    <h1 className={styles.functionsButtons} onClick={decrease}>
                        <RemoveIcon />
                    </h1>
                    <span className={styles.quantity}>{counter}</span>
                    <h1 className={styles.functionsButtons} onClick={increase}>
                        <AddIcon />
                    </h1>
                </section>
                <section className={styles.addCartButton} onClick={handleAddToCart}>
                    Add to Cart
                </section>
                <ToastContainer/>
            </section>
        </Fragment>
    );
}

import { useState } from "react";
import { Fragment } from "react";
import styles from "./header-promo.module.css";
import ClosedIcon from "@/src/frontend/components/atoms/close-icon";

export default function HeaderPromo() {
    const [showPromo, setShowPromo] = useState(true);

    const removePromo = () => {
        setShowPromo(false);
    };

    const goToSignUp = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const bannerFooter = document.getElementById("bannerFooter");

        if (bannerFooter) {
            bannerFooter.scrollIntoView({ behavior: "smooth", block: "end" });

            setTimeout(function () {
                bannerFooter.setAttribute("tabindex", "-1");
                bannerFooter.focus();
            }, 500);
        }
    };

    return (
        <Fragment>
            {showPromo && (
                <header className={styles.promoBanner}>
                    <h3 className={styles.promoText}>
                        Sign up and get 20% off to your first order.
                        <a className={styles.promoLink} href="#" id="sign-up" onClick={goToSignUp}>
                            Sign Up Now
                        </a>
                    </h3>
                    <section className={styles.promoCloseIcon} onClick={removePromo}>
                        <ClosedIcon />
                    </section>
                </header>
            )}
        </Fragment>
    );
}

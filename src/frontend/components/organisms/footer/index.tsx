import styles from "./footer.module.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";
import IconFacebook from "@/src/frontend/components/atoms/facebook";
import IconGithub from "@/src/frontend/components/atoms/icon-github";

interface Options {
    title: string;
    options: string[];
}

export default function Footer() {
    const [email, setEmail] = useState("");
    const [emails, setEmails] = useState<string[]>([]); // Lista de emails registrados

    const handleSubscribe = () => {
        const trimmedEmail = email.trim();

        if (trimmedEmail && validateEmail(trimmedEmail)) {
            if (emails.includes(trimmedEmail)) {
                toast.warn("Your email is already registered.", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            } else {
                setEmails([...emails, trimmedEmail]);
                toast.success("Your email has been successfully registered!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }
        } else {
            toast.error("Please enter a valid email address.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };

    function validateEmail(email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const navOptions: Options[] = [
        {
            title: "COMPANY",
            options: [
                "About",
                "Features",
                "Works",
                "Career",
            ]
        },
        {
            title: "HELP",
            options: [
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
            ]
        },
        {
            title: "FAQ",
            options: [
                "Account",
                "Manage Deliveries",
                "Orders",
                "Payment",
            ]
        },
        {
            title: "Resources",
            options: [
                "Free eBook",
                "Development Tutorial",
                "How to - Blog",
                "Youtube Playlist",
            ]
        },
    ];

    return (
        <footer className={styles.containerFooter}>
            <section className={styles.containerBoxFooter}>
                <section className={styles.containerBannerFooter}>
                    <h1 className={styles.footerBannerTitle}>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
                    <section className={styles.loginConfirmation}>
                        <input
                            aria-label="email"
                            className={styles.footerInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                        />
                        <button className={styles.subscriberButton} onClick={handleSubscribe}>
                            Subscribe to Newsletter
                        </button>
                    </section>
                </section>
                <section className={styles.infosFooter}>
                    <section className={styles.infosAboutStore}>
                        <section className={styles.socialIcons}>
                            <h1 className={styles.shopLogoFooter}>SHOP.CO</h1>
                            <h3 className={styles.reviewFooter}>
                                We have clothes that suit your style and which you’re proud to wear. From women to men.
                            </h3>
                            <section className={styles.containerIcons}>
                                <a href="https://x.com/compassuol" target="_blank" className={styles.icon}>
                                    <Twitter/>
                                </a>
                                <a href="https://www.facebook.com/compass.uol" target="_blank" className={`${styles.icon} ${styles.facebook}`}>
                                   <IconFacebook/>
                                </a>
                                <a href="https://www.instagram.com/compass.uol" target="_blank" className={styles.icon}>
                                    <Instagram/>
                                </a>
                                <a href="https://github.com" target="_blank" className={styles.icon}>
                                    <IconGithub/>
                                </a>
                            </section>
                        </section>
                        <section className={styles.footerNav}>
                            {navOptions.map((item) => (
                                <section key={item.title} className={styles.containerFooterNav}>
                                    <h1 className={styles.titleFooterNav}>{item.title}</h1>
                                    <ul className={styles.listNav}>
                                        {item.options.map((option) => (
                                            <li key={option} className={styles.optionFooterNav}>
                                                <p className={styles.optionText}>{option}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </section>
                    </section>
                    <section className={styles.edgeToSeparate}></section>
                    <section className={styles.paymentMethods}>
                        <h2 className={styles.review}>Shop.co © 2000-2023, All Rights Reserved</h2>
                        <section className={styles.containerPayment}>
                            <img src="assets/home-page/visa.png" alt="payment" />
                            <img src="assets/home-page/mastercard.png" alt="payment" />
                            <img src="assets/home-page/paypal.png" alt="payment" />
                            <img src="assets/home-page/apple-pay.png" alt="payment" />
                            <img src="assets/home-page/google-pay.png" alt="payment" />
                        </section>
                    </section>
                </section>
            </section>
            <ToastContainer/>
        </footer>
    );
}

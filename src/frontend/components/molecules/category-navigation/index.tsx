import {Fragment} from "react";
import styles from "./category-navigation.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useRouter} from "next/navigation";

type Props = {
    categoryType: string
}

export default function CategoryNavigation ({categoryType} : Props) {

    const router = useRouter();

    return (
        <Fragment>
            <section className={styles.navigate}>
                <h2 className={styles.home} onClick={() => router.push('/')}>Home</h2>
                <NavigateNextIcon style={{color: "#00000099"}}/>
                <h2>{categoryType}</h2>
            </section>
        </Fragment>
    )
}
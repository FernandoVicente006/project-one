import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
    return (
        <section className={styles.sectionPart}>
            <img src={process.env.PUBLIC_URL + '/pngError.png'} alt="logoerror" />
            <Link to={"/"}>Voltar á Página Principal</Link>
        </section>
    )
}

export default PageNotFound;
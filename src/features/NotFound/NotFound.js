import { Link } from "react-router-dom";
import { paths } from "paths";
import styles from "./NotFound.module.css";
import notfound from "./notfound.svg"

export default function NotFound() {

    return (
        <div className={styles.notFound_container}>
            <img className={styles.notFound_pic} src={notfound} alt="what?"></img>
            <button>
                <Link className={styles.gohome_btn} to={paths.main}>
                    <span className={styles.gohome_text}>На головну</span>
                </Link>
            </button>
        </div>
    )
}
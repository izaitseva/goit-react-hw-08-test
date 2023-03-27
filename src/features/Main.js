import { Outlet } from "react-router"
// import { Contacts } from "./contacts/Contacts"
import { Navigation } from "./navigation/Navigation"
import styles from "./Main.modules.css"

export const Main = () => {

    return (
        <div className={styles.main_container}>
            <Navigation />
            <Outlet />
        </div>
    )
}
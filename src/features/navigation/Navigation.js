import styles from "./Navigation.module.css"
import { UserMenu } from "features/usermenu/UserMenu"
import { paths } from "paths"
import { NavLink } from "react-router-dom"
import useUser from "../hooks/UseUser";

export const Navigation = () => {
    const { isAuth } = useUser();

    return (
        <header>
            {!isAuth &&
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <NavLink className={styles.link} activeclassname={styles.activeLink} to={paths.main}>Contacts</NavLink>
                    </li>
                    <li className={styles.list_item}>
                        <NavLink className={styles.link} activeclassname={styles.activeLink} to={paths.login}>
                            <span>Login</span>
                        </NavLink>
                    </li>
                    <li className={styles.list_item}>
                        <NavLink className={styles.link} activeclassname={styles.activeLink} to={paths.register}>
                            <span>Register</span>
                        </NavLink>
                    </li>
                </ul>
            }
            <UserMenu />
        </header>
    )
}
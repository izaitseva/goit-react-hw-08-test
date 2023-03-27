import axios from "axios";
import { paths } from "paths";
import { NavLink } from "react-router-dom";
import useUser from "../hooks/UseUser";

import styles from "./UserMenu.module.css"

export const UserMenu = () => {

    const { jwt, isAuth, localLogout } = useUser();

    const handlerLogOut = () => {

        axios
            .post('/users/logout', null, {
                headers: {
                    Authorization: jwt,
                }
            })
            .then(res => {
                console.log(res.data);
                localStorage.removeItem('jwt');
            })
            .catch((er) => {
                const { data } = er.response
                console.log(data);
            })
            .finally((data) => {
                console.log(data);
                localLogout();
                window.location.reload();
            })
    }

    return (
        <div>
            {isAuth &&
                <div className={styles.user_menu}>
                    <NavLink className={styles.link} activeclassname={styles.activeLink} to={paths.main}>Contacts</NavLink>
                    <button className={styles.logout_btn} onClick={handlerLogOut}>Logout</button>
                </div>
            }
        </div>
    )
}
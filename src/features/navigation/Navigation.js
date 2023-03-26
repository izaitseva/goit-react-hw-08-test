
import { UserMenu } from "features/usermenu/UserMenu"
import { paths } from "paths"
import { Link } from "react-router-dom"
import useUser from "../hooks/UseUser";

export const Navigation = () => {
    const { isAuth } = useUser();

    return (
        <header>
            <ul>
                <li>
                    <Link to={paths.main}>Contacts</Link>
                </li>

                {!isAuth &&
                    <>
                        <li>
                            <Link to={paths.login}>Login</Link>
                        </li>
                        <li>
                            <Link to={paths.register}>Register</Link>
                        </li>
                    </>
                }
            </ul>
            <UserMenu />
        </header>
    )
}
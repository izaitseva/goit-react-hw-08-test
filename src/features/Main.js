import { Outlet } from "react-router"
// import { Contacts } from "./contacts/Contacts"
import { Navigation } from "./navigation/Navigation"

export const Main = () => {

    return (
        <div>
            <Navigation />
            {/* <Contacts /> */}
            <Outlet />
        </div>
    )
}
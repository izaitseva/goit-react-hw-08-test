import axios from "axios";
import useUser from "../hooks/UseUser";

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
                <div>
                    <p>mango@mail.com</p>
                    <button onClick={handlerLogOut}>Logout</button>
                </div>
            }
        </div>
    )
}
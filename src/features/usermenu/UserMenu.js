import useUser from "../hooks/UseUser";

export const UserMenu = () => {
    const { isAuth } = useUser();
    return (
        <div>
            {isAuth &&
                <div>
                    <p>mango@mail.com</p>
                    <button>Logout</button>
                </div>
            }
        </div>
    )
}
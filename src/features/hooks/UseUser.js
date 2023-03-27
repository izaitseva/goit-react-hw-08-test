import { useState } from "react";

const useUser = () => {

    const [jwt, setJWT] = useState(localStorage.getItem('jwt'));

    const localLogout = () => {
        localStorage.removeItem('jwt');
        setJWT('');
    }

    const login = (jwt) => {
        localStorage.setItem('jwt', jwt);
        setJWT(jwt);
    }

    return {
        isAuth: !!jwt,
        jwt,
        localLogout,
        login
    }
}

export default useUser;
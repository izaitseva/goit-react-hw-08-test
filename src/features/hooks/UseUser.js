const useUser = () => {

    const jwt = localStorage.getItem('jwt')

    return {
        isAuth: !!jwt,
        jwt
    }
}

export default useUser
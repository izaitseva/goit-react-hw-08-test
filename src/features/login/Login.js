import axios from "axios";
import useUser from "features/hooks/UseUser";
import { paths } from "paths";
import { useNavigate } from "react-router";

function Login() {

    const navigate = useNavigate();
    const {login} = useUser();

    const handleSubmit = (e) => {

        e.preventDefault();

        const {
            elements: { email, password },
        } = e.target
        console.log(email, password);

        axios
            .post('/users/login', {
                email: email.value,
                password: password.value,
            })
            .then(res => {

                login(res.data.token);
                // localStorage.setItem('jwt', res.data.token)
                navigate(paths.main);
            })
            .catch((er) => {
                const { data } = er.response
                console.log(data);
            })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
                type="text"
                id="email"
                required
            />

            <label>Password:</label>
            <input
                type="password"
                id="password"
                required
            />
            <button type="submit">Log in</button>
        </form>
    );
}

export default Login;
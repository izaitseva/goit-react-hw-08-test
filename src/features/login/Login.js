import axios from "axios";
import { paths } from "paths";
import { useNavigate } from "react-router";

function Login() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        const {
            elements: { email, password },
        } = e.target
        console.log(email, password);
        axios.post('/users/login', {
            email: email.value,
            password: password.value,
        }).then(res => {
            navigate(paths.main);
            console.log(res.data);
            localStorage.setItem('jwt', res.data.token)
        }).catch((er) => {
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
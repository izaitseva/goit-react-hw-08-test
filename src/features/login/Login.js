import axios from "axios";
import useUser from "features/hooks/UseUser";
import { paths } from "paths";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";

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
        <form className={styles.input_group} onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
            className={styles.input} 
                type="text"
                id="email"
                required
            />

            <label>Password:</label>
            <input
            className={styles.input} 
                type="password"
                id="password"
                required
            />
            <button className={styles.login_btn} type="submit">Log in</button>
        </form>
    );
}

export default Login;
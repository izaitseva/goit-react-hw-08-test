import axios from "axios";
import { paths } from "paths";
import { useNavigate } from "react-router";
import styles from "./Register.module.css";

export const Register = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const {
            elements: { email, password, name },
        } = e.target
        console.log(email, password, name);
        axios.post('/users/signup', {
            name: name.value,
            email: email.value,
            password: password.value,
        }).then(res => {
            navigate(paths.login);
            alert(res.data.user.name)
            console.log(res.data);
            localStorage.setItem('jwt', res.data.token)
        }).catch((er) => {
            const { data } = er.response
            console.log(data);
        })
    };

    return (
        <form className={styles.input_group} onSubmit={handleSubmit}>
            <label className={styles.form_text}>Name:</label>
            <input
                className={styles.input}
                placeholder="type your name"
                type="text"
                id="name"
                required
            />

            <label className={styles.form_text}>Email:</label>
            <input
                className={styles.input}
                placeholder="type your email"
                type="email"
                id="email"
                required
            />

            <label className={styles.form_text}>Password:</label>
            <input
                className={styles.input}
                placeholder="create your password"
                type="password"
                id="password"
                required
            />

            <button className={styles.register_btn} type="submit">Register</button>
        </form>
    )

}
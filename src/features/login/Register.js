import axios from "axios";

export const Register = () => {

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
            alert(res.data.user.name)
            console.log(res.data);
            localStorage.setItem('jwt', res.data.token)
        }).catch((er) => {
            const { data } = er.response
            console.log(data);
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                placeholder="type your name"
                type="text"
                id="name"
                required
            />

            <label>Email:</label>
            <input
                placeholder="type your email"
                type="email"
                id="email"
                required
            />

            <label>Password:</label>
            <input
                placeholder="create your password"
                type="password"
                id="password"
                required
            />

            <button type="submit">Register</button>
        </form>
    )

}
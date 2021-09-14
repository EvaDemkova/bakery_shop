import React, { useState, useContext } from 'react';
import app from '../../base';
import { Redirect, useHistory } from 'react-router-dom';
import { AuthContext } from '../../Auth';

const Login = () => {
    const [credentials, setCredentials] = useState({});
    const history = useHistory();
    const { currentUser } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            app.auth().signInWithEmailAndPassword(email.value, password.value);
            console.log('successfully logged in');
            history.push('/');
        } catch (error) {
            alert(error);
        }
    };

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
                name="email"
                value={credentials.email}
                onChange={handleChange}
            ></input>

            <label>Password:</label>
            <input
                name="password"
                value={credentials.password}
                onChange={handleChange}
            ></input>

            <button>Log in</button>
        </form>
    );
};

export default Login;

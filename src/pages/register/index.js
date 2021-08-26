import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import app from "../../base";

const Register = () => {
  const [credentials, setCredentials] = useState({});
  const history = useHistory();

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
      app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredentials) => {
          console.log(userCredentials);
          if (userCredentials.user) {
            userCredentials.user.updateProfile({
              displayName: "Frank S. Andrew",
            });
          }
        });
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

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

export default Register;

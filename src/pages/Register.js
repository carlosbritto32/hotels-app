import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorMsg } from "../components/ErrorMsg";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      setError(error.message);
    }
  };
  return (
    <div>
      {error && <ErrorMsg message={error} />}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@gmail.com"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>

        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>

        <button>Register</button>
      </form>
    </div>
  );
}

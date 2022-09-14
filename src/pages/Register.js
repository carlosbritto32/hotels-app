import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
      if (error.code === "auth/weak-password") {
        setError("The password must have at least 6 characters");
      } else if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered!");
      } else if (error.code === "auth/invalid-email") {
        setError("invalid email");
      }
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
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

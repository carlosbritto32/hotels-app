import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorMsg } from "../components/ErrorMsg";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { login, loginGoogle } = useAuth();
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
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    try {
      await loginGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="w-full max-w-sm m-auto">
      {error && <ErrorMsg message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 rounded-lg"
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-black-700 font-bold mb-2 text-sm"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 "
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block text-black-700 font-bold mb-2 text-sm"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*******"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 "
            onChange={handleChange}
          />
        </div>

        <button className="bg-teal-400 hover:bg-teal-600 px-4 py-2 rounded-lg text-white font-bold shadow-md">
          Log in
        </button>
      </form>

      <button
        onClick={handleGoogleSignIn}
        className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow-md text-center w-full"
      >
        Login with Google
      </button>
    </div>
  );
}

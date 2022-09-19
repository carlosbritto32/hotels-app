import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Provider } from "./context/AuthContext";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { PostForm } from "./components/PostForm";

function App() {
  return (
    <div className="bg-slate-100 h-screen text-black w-full">
      <Provider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new" element={<PostForm />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

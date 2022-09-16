import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Provider } from "./context/AuthContext";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="bg-slate-100 h-screen text-black flex">
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
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

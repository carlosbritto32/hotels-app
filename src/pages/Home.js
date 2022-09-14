import { useAuth } from "../context/AuthContext";

export function Home() {
  const AuthContext = useAuth();
  // const AuthContext = useContext(context)
  console.log(AuthContext);

  return <div>Home</div>;
}

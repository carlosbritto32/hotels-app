import { useAuth } from "../context/AuthContext";

export function Header() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>Loading</h1>;
  return (
    <header className="w-full h-16 flex bg-teal-500 justify-between items-center px-5 shadow-md text-white font-bold">
      <div className="flex items-center">
        <img src={require(`../assets/hotel.png`)} alt="logo" className="w-12" />
        <a href="/" className="text-lg">
          Hotels App
        </a>
      </div>
      <nav className="flex">
        <h2>Welcome {user.displayName || user.email} </h2>

        <button
          onClick={handleLogout}
          className="text-stone-100 hover:text-stone-400 ml-6"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

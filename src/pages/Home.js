import { useAuth } from "../context/AuthContext";

export function Home() {
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
    <div>
      <header className="w-full h-16 flex bg-teal-500 justify-between items-center px-5 shadow-md text-white font-bold">
        <div className="flex items-center">
          <img
            src={require(`../assets/hotel.png`)}
            alt="logo"
            className="w-12"
          />
          <a href="/" className="text-lg">
            Hotels App
          </a>
        </div>
        <nav className="text-end">
          <h2>Welcome {user.displayName || user.email} </h2>

          <button
            onClick={handleLogout}
            className="text-stone-100 hover:text-stone-400"
          >
            Logout
          </button>
        </nav>
      </header>
      <section className="flex flex-col items-center justify-center">
        <article className="border-2 border-yellow-500 mx-10 mt-20 mb-5 bg-yellow-100 p-10 text-center rounded-lg shadow-md">
          Mmm. Looks like you haven't publish your hotel yet...
        </article>

        <button className="bg-teal-400 hover:bg-teal-600 px-4 py-2 rounded-lg text-white font-bold shadow-md">
          Create Hotel
        </button>
      </section>
    </div>
  );
}

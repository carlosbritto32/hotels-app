import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Header />
      <section className="flex flex-col items-center justify-center">
        <article className="border-2 border-yellow-500 mx-10 mt-20 mb-5 bg-yellow-100 p-10 text-center rounded-lg shadow-md">
          Mmm. Looks like you haven't publish your hotel yet...
        </article>

        <p className="bg-teal-400 hover:bg-teal-600 px-4 py-2 rounded-lg text-white font-bold shadow-md">
          <Link to="/new">Create new hotel </Link>
        </p>
      </section>
    </div>
  );
}

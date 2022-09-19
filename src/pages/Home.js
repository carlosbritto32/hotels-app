import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Header } from "../components/Header";

async function handleClick() {
  try {
    const docRef = await addDoc(collection(db, "hotels"), {
      name: "hotelcito",
      description: "beautifull",
      country: "col",
      state: "ris",
      county: "pei",
      logo: null,
      type: "turism",
      score: 4,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export function Home() {
  return (
    <div>
      <Header />
      <section className="flex flex-col items-center justify-center">
        <article className="border-2 border-yellow-500 mx-10 mt-20 mb-5 bg-yellow-100 p-10 text-center rounded-lg shadow-md">
          Mmm. Looks like you haven't publish your hotel yet...
        </article>

        <button
          onClick={handleClick}
          className="bg-teal-400 hover:bg-teal-600 px-4 py-2 rounded-lg text-white font-bold shadow-md"
        >
          Create new hotel
        </button>
      </section>
    </div>
  );
}

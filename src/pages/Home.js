import { Header } from "../components/Header";
import { Link } from "react-router-dom";
// import { NoHotelsMsg } from "../components/NoHotelsMsg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { HotelCard } from "../components/HotelCard";

export function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function getHotels() {
      const querySnapshot = await getDocs(collection(db, "hotels"));
      const docs = [];
      querySnapshot.forEach((doc) => {
        const CreatedHotel = doc.data();
        docs.push({ ...CreatedHotel, id: doc.id });
      });
      setHotels(docs);
    }
    getHotels();
  }, [hotels]);
  return (
    <div>
      <Header />
      <div className="flex justify-end p-5">
        <Link
          to="/new"
          className="bg-teal-400 hover:bg-teal-600 px-2 py-2 rounded-lg text-white font-bold shadow-md"
        >
          Create new hotel
        </Link>
      </div>
      <section className="flex flex-wrap">
        {/* <NoHotelsMsg /> */}
        {hotels.map((hotel) => (
          <HotelCard hotel={hotel} key={hotel.id} />
        ))}
      </section>
    </div>
  );
}

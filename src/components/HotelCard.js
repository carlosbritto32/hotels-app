import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export function HotelCard({ hotel }) {
  const deleteHotel = async (id) => {
    await deleteDoc(doc(db, "hotels", id));
  };

  return (
    <div className="bg-white w-72 rounded-lg shadow-md m-2 px-2 pb-2">
      <div className="text-end ">
        <button onClick={() => deleteHotel(hotel.id)}>🗑️</button>
      </div>
      <p className="block text-black-700 font-bold text-sm">Name</p>
      <h3 className="pb-2">{hotel.name}</h3>
      <p className="block text-black-700 font-bold text-sm">Description</p>
      <p className="pb-2">{hotel.description}</p>
      <p className="block text-black-700 font-bold text-sm">Country</p>
      <p className="pb-2">{hotel.country}</p>
      <p className="block text-black-700 font-bold text-sm">State</p>
      <p className="pb-2">{hotel.state}</p>
      <p className="block text-black-700 font-bold text-sm">Type</p>
      <p className="pb-2">{hotel.type}</p>
      <p className="block text-black-700 font-bold text-sm">Room</p>
      <p className="pb-2">{hotel.room}</p>
    </div>
  );
}

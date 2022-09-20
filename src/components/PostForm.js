import { Header } from "./Header";
import { Formik, Field, Form } from "formik";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { countries } from "../utils/countries";
import { regions } from "../utils/region";
import { types } from "../utils/type";
import { rooms } from "../utils/room";

export function PostForm() {
  return (
    <>
      <Header />
      <Formik
        initialValues={{
          name: "",
          description: "",
          country: "",
          state: "",
          type: "",
          room: "",
        }}
        onSubmit={async (values) => {
          try {
            const docRef = await addDoc(collection(db, "hotels"), values);
            console.log("Document written with ID: ", docRef.id);
          } catch (error) {
            console.error("Error adding document: ", error);
          }
        }}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="w-full p-10 bg-white shadow-lg rounded-lg"
          >
            <label className="block pl-2 text-sm font-bold">Name</label>
            <Field
              name="name"
              placeholder="name"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            />
            <label className="block pl-2 text-sm font-bold">Description</label>
            <Field
              name="description"
              placeholder="description"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            />
            <label className="block pl-2 text-sm font-bold">Country</label>
            <Field
              name="country"
              placeholder="country"
              as="select"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            >
              {countries.map((item, index) => (
                <option key={index}> {item.name} </option>
              ))}
            </Field>
            <label className="block pl-2 text-sm font-bold">State</label>
            <Field
              name="state"
              placeholder="state"
              as="select"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            >
              {regions.map((item, index) => (
                <option key={index}> {item.region} </option>
              ))}
            </Field>
            <label className="block pl-2 text-sm font-bold">Type</label>
            <Field
              name="type"
              placeholder="type"
              as="select"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            >
              {types.map((item) => (
                <option>{item}</option>
              ))}
            </Field>
            <label className="block pl-2 text-sm font-bold">Room</label>
            <Field
              name="room"
              placeholder="room"
              as="select"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            >
              {rooms.map((item) => (
                <option>{item}</option>
              ))}
            </Field>
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-600 px-4 py-2 rounded-lg text-white font-bold shadow-md"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

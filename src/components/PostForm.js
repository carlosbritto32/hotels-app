import { Header } from "./Header";
import { Formik, Field, Form } from "formik";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

// async function handleClick() {
//   try {
//     const docRef = await addDoc(collection(db, "hotels"), {
//       name: "hotelcito",
//       description: "beautifull",
//       country: "col",
//       state: "ris",
//       county: "pei",
//       logo: null,
//       type: "turism",
//       score: 4,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (error) {
//     console.error("Error adding document: ", error);
//   }
// }

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
          county: "",
          type: "",
          score: "",
          logo: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="w-full p-10 bg-white shadow-lg rounded-lg"
          >
            <Field
              name="name"
              placeholder="name"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            />
            <Field
              name="description"
              placeholder="description"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            />
            <Field
              name="country"
              placeholder="country"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            />
            <Field
              name="state"
              placeholder="state"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            />
            <Field
              name="county"
              placeholder="county"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            />
            <Field
              name="type"
              placeholder="type"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            />
            <Field
              name="score"
              placeholder="score"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-2"
            />
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

import { useState } from "react";
import services from "../services";
export default function deletepost() {
    const [formData, setFormData] = useState({ id: 0});
    const [message, setMessage] = useState("");
    const handleIDInputChange = ({ target: { id, value } }) => {
        // const { name, value } = event.target
        // obj = { ...prev }; obj[name] = value
        // console.log(event.target.value);
        setFormData((prev) => ({
          ...prev,
          id: parseInt(value, 10),
        }));
    };
    const handleFormSubmit = (event) => {
        console.log(formData.id);
        services.user.deletepost({ id: formData.id }).then((data) => {
          setMessage(JSON.stringify(data, null, 2));
        });
        setFormData({id: 0});
        event.preventDefault();
      };
    return <div>
        <h1>Delete the post</h1> 
        <input
                  name="owner"
                  placeholder="Post id"
                  type="number"
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleIDInputChange}
        />
        <button type="submit" onClick={handleFormSubmit}
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            delete!</button>
        </div>;
}

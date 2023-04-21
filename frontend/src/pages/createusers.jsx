import { useState } from "react";
import services from "../services";
export default function createusers() {
    const [formData, setFormData] = useState({ username: "" });
    const [message, setMessage] = useState("");
    const handleTextInputChange = ({ target: { name, value } }) => {
        // const { name, value } = event.target
        // obj = { ...prev }; obj[name] = value
        console.log(name, value);
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
    };
    const handleFormSubmit = (event) => {
        services.user.createOneUser({ name: formData.username }).then((data) => {
          setMessage(JSON.stringify(data, null, 2));
        });
        setFormData({ username: "" });
        event.preventDefault();
      };
    
    return <div>
        <h1>Create your account!</h1> 
        <input
                  name="username"
                  type="text"
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleTextInputChange}
        />
        <button type="submit" onClick={handleFormSubmit}
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            create!</button>
        </div>;
}

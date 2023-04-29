import { useState } from "react";
import services from "../services";
export default function editpersonals() {
    const [formData, setFormData] = useState({ text: "" , owner: ""});
    const [message, setMessage] = useState("");
    const handleOwnerInputChange = ({ target: { owner, value } }) => {
        // const { name, value } = event.target
        // obj = { ...prev }; obj[name] = value
        // console.log(event.target.value);
        setFormData((prev) => ({
          ...prev,
          owner: value,
        }));
        console.log(formData);
    };
    const handleTextInputChange = ({ target: { text, value } }) => {
        // const { name, value } = event.target
        // obj = { ...prev }; obj[name] = value
        console.log(value);
        setFormData((prev) => ({
          ...prev,
          text: value,
        }));
        
        console.log(formData);
    };
    const handleFormSubmit = (event) => {
        services.user.createPost({ text: formData.text, owner: formData.owner }).then((data) => {

          setMessage(JSON.stringify(data, null, 2));
        });
        setFormData({ text: "" , owner: ""});
        event.preventDefault();
      };
    return <div>
        <h1>Post something!</h1> 
        <input
                  name="owner"
                //   value={formData.owner}
                  placeholder="Post owner"
                  type="text"
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleOwnerInputChange}
        />
        <input
                  name="Post context"
                //   value={formData.text}
                  placeholder="text"
                  type="textarea"
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleTextInputChange}
        />
        <button type="submit" onClick={handleFormSubmit}
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            edit!</button>
        </div>;
}

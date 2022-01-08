import { useState } from "react";
import "./Form.scss";

const Form = () => {
   const [input, setInput] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setInput({
         ...input,
         [name]: value,
      });
   };
   console.log(input);
   return (
      <form>
         <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Name"
            value={input.name}
         />
         <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Email"
            value={input.email}
         />
         <input
            onChange={handleChange}
            type="text"
            name="phone"
            placeholder="Phone"
            value={input.phone}
         />
         <textarea
            onChange={handleChange}
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            value={input.message}
         ></textarea>
         <button>Submit</button>
      </form>
   );
};

export default Form;

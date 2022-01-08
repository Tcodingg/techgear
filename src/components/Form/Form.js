import { useState, useEffect } from "react";
import "./Form.scss";

const Form = () => {
   const [input, setInput] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
   });

   const [isValidName, setIsValidName] = useState(null);
   const [isValidEmail, setIsValidEmail] = useState(null);
   const [isValidPhone, setIsValidPhone] = useState(null);

   // save input values
   const handleChange = (e) => {
      const { name, value } = e.target;
      setInput({
         ...input,
         [name]: value,
      });
   };

   let phone = input.phone.toString().replace(/\D/g, "").substring(0, 10);
   const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   // display phone input value
   const [phoneValue, setPhoneValue] = useState("");
   useEffect(() => {
      let input = phone;

      var size = input.length;
      if (size > 0) {
         input = "(" + input;
      }
      if (size > 3) {
         input = input.slice(0, 4) + ") " + input.slice(4);
      }
      if (size > 6) {
         input = input.slice(0, 9) + "-" + input.slice(9);
      }
      return setPhoneValue(input);
   }, [phone]);
   useEffect(() => {
      let input = phone;

      var size = input.length;
      if (size > 0) {
         input = "(" + input;
      }
      if (size > 3) {
         input = input.slice(0, 4) + ") " + input.slice(4);
      }
      if (size > 6) {
         input = input.slice(0, 9) + "-" + input.slice(9);
      }
      return setPhoneValue(input);
   }, [phone]);

   //console.log(isValidEmail, isValidName, isValidPhone);

   useEffect(() => {
      function validateInput() {
         // validate name
         input.name.length === 0
            ? setIsValidName(null)
            : input.name.length > 4
            ? setIsValidName(true)
            : setIsValidName(false);

         // validate phone
         phoneValue.length === 0
            ? setIsValidPhone(null)
            : phoneValue.length === 14
            ? setIsValidPhone(true)
            : setIsValidPhone(false);
         // validate email
         input.email.length === 0
            ? setIsValidEmail(null)
            : regexp.test(input.email)
            ? setIsValidEmail(true)
            : setIsValidEmail(false);
      }
      validateInput();
   }, [input.name, input.phone, input.email, phoneValue]);

   // handle submit
   const handleSubmit = (e) => {
      e.preventDefault();
   };
   return (
      <form>
         <div className="form-control">
            <input
               onChange={handleChange}
               type="text"
               name="name"
               placeholder="Name"
               value={input.name}
            />
            {isValidName === false ? (
               <small>Please enter a valid name!</small>
            ) : (
               ""
            )}
         </div>
         <div className="form-control">
            <input
               onChange={handleChange}
               type="text"
               name="email"
               placeholder="Email"
               value={input.email}
            />
            {isValidEmail === false ? (
               <small>Please enter a valid Email!</small>
            ) : (
               ""
            )}
         </div>
         <div className="form-control">
            <input
               onChange={handleChange}
               type="text"
               name="phone"
               placeholder="Phone"
               value={phoneValue}
            />
            {isValidPhone === false ? (
               <small>Please enter a valid phone number!</small>
            ) : (
               ""
            )}
         </div>
         <textarea
            onChange={handleChange}
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            value={input.message}
         ></textarea>

         <button onClick={handleSubmit}>Submit</button>
      </form>
   );
};

export default Form;

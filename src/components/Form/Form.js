import "./Form.scss";

const Form = () => {
   return (
      <form>
         <input type="text" name="name" placeholder="Name" />
         <input type="text" name="name" placeholder="Email" />
         <input type="text" name="name" placeholder="Subject" />
         <textarea
            name="textarea"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
         ></textarea>
         <button>Submit</button>
      </form>
   );
};

export default Form;

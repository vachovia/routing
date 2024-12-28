import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {createContactAction} from "../../redux/slice/contacts/actions";

export default function Contact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [c, setC] = useState({
    id: Math.random()*100,
    email: "",
    message: "",
  });

  //---Destructuring---
  const { email, message } = c;

  //---onChange Handler----
  const onChange = (e) => {
    setC({ ...c, [e.target.name]: e.target.value });
  };

  //---onSubmit Handler----
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createContactAction(c));
      navigate(`/`);
      console.log(c);            
    } catch (e) {}
  };

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form onSubmit={onSubmit}>
        <label>
          <span>Your email:</span>
          <input
            value={email}
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={onChange}
            required
          />
        </label>
        <label>
          <span>Your message:</span>
          <textarea
            value={message}
            name="message"
            placeholder="Enter Message"
            onChange={onChange}
            required
          ></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

import { useState } from "react";
// eslint-disable-next-line
import { Navigate, useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const [user, setUser] = useState("Vlad");

  // if (!user) {
  //   return <Navigate to="/" replace={true} />;
  // }

  // replace: true removes from history about page
  // when we try to navigate back after logout  
  if (!user) {
    navigate("/", { replace: true });
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}

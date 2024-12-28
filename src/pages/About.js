import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line
import { Navigate, useNavigate } from "react-router-dom";
import { logoutUserAction } from "../redux/slice/users/actions";

export default function About() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // if (!user) {
  //   return <Navigate to="/" replace={true} />;
  // }

  const { user } = useSelector((state) => state?.users);

  // replace: true removes from history about page
  // when we try to navigate back after logout
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

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

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

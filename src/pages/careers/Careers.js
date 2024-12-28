import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCareersAction } from "./../../redux/slice/careers/actions";

export default function Careers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCareersAction());
  }, [dispatch]);

  const { careers, error, loading } = useSelector((state) => state?.careers);

  return (
    <>
      {loading ? (
        <h2 className="careers-loading">Loading...</h2>
      ) : error ? (
        <h2 className="careers-error">{error}</h2>
      ) : careers.length ? (
        <div className="careers">
          {careers.map((career) => (
            <Link to={`${career.id}`} key={career.id}>
              <p>{career.title}</p>
              <p>Based in {career.location}</p>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className="careers-empty">No careers to show</h2>
      )}
    </>
  );
}

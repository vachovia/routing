import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCareerDetailsAction } from "./../../redux/slice/careers/actions";

export default function CareerDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCareerDetailsAction({id}));
  }, [id, dispatch]);

  const { career, error, loading } = useSelector((state) => state?.careers);

  return (
    <>
      {loading ? (
        <h2 className="career-loading">Loading...</h2>
      ) : error ? (
        <h2 className="career-error">{error}</h2>
      ) : career ? (
        <div className="career-details">
          <h2>Career Details for {career.title}</h2>
          <p>Starting salary: {career.salary}</p>
          <p>Location: {career.location}</p>
          <div className="details">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum
              voluptatem!
            </p>
          </div>
        </div>
      ) : (
        <div>No careers to show.</div>
      )}
    </>
  );
}
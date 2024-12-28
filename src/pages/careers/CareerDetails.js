import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData() || {};

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  console.log(`route -> careers/${id}`);

  return (
    <>
      {domLoaded ? (
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

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params; // provided by react
  console.log(`loader function: id=${id}`);

  const res = await fetch("http://localhost:3001/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career.");
  }

  return res.json();
};

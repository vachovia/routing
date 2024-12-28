import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData() || [];

  return (
    <>
      {careers.length ? (<div className="careers">
        {careers.map((career) => (
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        ))}
      </div>) : (
        <div>No careers to show</div>
      )}      
    </>
  );
}

export const careersLoader = async () => {
  const res = await fetch("http://localhost:3001/careers");

  if (!res.ok) {
    throw Error("Could not fetch the list of careers");
  }

  return res.json();
};
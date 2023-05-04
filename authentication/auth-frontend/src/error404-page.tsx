import { Link } from "react-router-dom";

function Error404Page() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h3 className="text-xl">You have found a secret place.</h3>
      <p className="pb-6">Unfortunately, this is a 404 page.</p>

      <Link to="/">Take me back to the home page.</Link>
    </div>
  );
}

export default Error404Page;

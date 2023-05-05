import { Link } from "react-router-dom";

function Error401Page() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">401</h1>
      <h3 className="text-xl">You have found a secret place.</h3>
      <p className="pb-6">Unfortunately, you don't have permission to be here.</p>

      <Link to="/">Take me back to the home page.</Link>
    </div>
  );
}

export default Error401Page;

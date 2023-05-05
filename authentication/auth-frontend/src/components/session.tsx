import { useUserContext } from "../hooks/useUser";

function Session() {
  const { user, setUser } = useUserContext();

  if (user) {
    return (
      <p
        className="text-white bg-slate-600 px-4 py-2 cursor-pointer"
        onClick={() => setUser(undefined)}
      >
        Lougout
      </p>
    );
  }

  return <></>;
}

export default Session;

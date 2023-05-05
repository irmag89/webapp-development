import { useState } from "react";
import { useUserContext } from "../hooks/useUser";

function Login() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser } = useUserContext();

  function handleSubmit(e) {
    e.preventDefault();

    if (name == "ismael" && password == "clave") {
      setUser(name);
    } else {
        alert("Nombre de usuario o clave no validos.");
        setName("");
        setPassword("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="user"
        placeholder="Nombre de usuario"
        className="w-full border border-slate-600 mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Clave de acceso"
        className="w-full border border-slate-600 mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="text-white bg-slate-600 px-4 py-2">
        Iniciar sesi&oacute;n
      </button>
    </form>
  );
}

export default Login;

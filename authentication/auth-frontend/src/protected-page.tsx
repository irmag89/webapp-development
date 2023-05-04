import Menu from "./components/menu";

function ProtectedPage() {
  return (
    <>
      <h1 className="text-xl font-bold">Protected Page</h1>
      <p>This is the content of the protected page.</p>

      <Menu />
    </>
  );
}

export default ProtectedPage;

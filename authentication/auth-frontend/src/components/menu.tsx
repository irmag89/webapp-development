import { Link } from "react-router-dom";

function Menu() {
  const entries = [
    { name: "Root page", href: "/" },
    { name: "About page", href: "/about" },
    { name: "Protected page", href: "/protected" },
  ];

  return (
    <div className="my-6">
      <p className="font-bold">Menu</p>
      <ul>
        {entries.map(({ name, href }, index) => (
          <li key={index}>
            <Link to={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

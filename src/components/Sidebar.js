import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "ClassComp", path: "/classcomp" },
    { label: "Table", path: "/table" },
    { label: "Menu", path: "/menu" },
  ];

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {links.map((link) => {
        return (
          <Link
            key={link.label}
            to={link.path}
            className="mb-3"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;

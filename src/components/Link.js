import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return <div onClick={handleClick}>{children}</div>;
}

export default Link;

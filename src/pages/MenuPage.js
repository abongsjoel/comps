import React from "react";
import Menu from "../components/Menu";

export default class MenuPage extends React.Component {
  render() {
    const menuItems = [
      { label: "Home", subMenu: ["Great Place", "Country Home"] },
      {
        label: "About",
        subMenu: ["Our Vision", "Our Values", "Our Commitment"],
      },
      { label: "Contact" },
    ];

    return (
      <div>
        <Menu items={menuItems} />
      </div>
    );
  }
}

import React from "react";
import { GoChevronDown } from "react-icons/go";

export default class Menu extends React.Component {
  menuMap = new Map();

  state = {
    menuMap: this.menuMap,
  };

  divEl = React.createRef();

  renderedSubMenu = (subMenu) => {
    return (
      <ul>
        {subMenu.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };

  handleShowSubMenu = (label) => {
    const updatedMap = new Map();
    updatedMap.set(label, !this.state.menuMap.get(label));
    this.setState({ menuMap: updatedMap });
  };

  renderedMenu = () => {
    return this.props.items.map((item) => {
      return (
        <li key={item.label} className="pr-6 cursor-pointer">
          <span
            className="flex items-center"
            onClick={() => this.handleShowSubMenu(item.label)}
          >
            <span className="pr-1">{item.label}</span>
            {item?.subMenu && <GoChevronDown className="text-lg" />}
          </span>
          {this.state.menuMap.has(item.label) &&
            this.state.menuMap.get(item.label) &&
            item?.subMenu &&
            this.renderedSubMenu(item.subMenu)}
        </li>
      );
    });
  };

  handle = (event) => {
    if (!this.divEl.current) {
      return;
    }

    if (!this.divEl.current.contains(event.target)) {
      const updatedMap = new Map();
      this.setState({ menuMap: updatedMap });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handle, true);
  }

  render() {
    return (
      <nav ref={this.divEl}>
        <ul className="flex justify-evenly">{this.renderedMenu()}</ul>
      </nav>
    );
  }
}

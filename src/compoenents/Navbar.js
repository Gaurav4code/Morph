import { react } from "react";
import { MenuItems } from "../compoenents/MenuItems";
import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          class="  border-solid border-2 border-sky-500
                    bg-green-400 w-full h-10 flex flex-row
                    justify-between
                    px-20
                    "
        >
          <h1 className="font-sans ">MORPH </h1>
          <ul className="flex  flex-row border-solid border-2 border-sky-900 ">
            {MenuItems.map((item, index) => {
              return (
                <li className=" font-sans Barlow-Regular px-10" key={index}>
                  <a className={item.cName} to={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;

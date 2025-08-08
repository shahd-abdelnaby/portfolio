import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return  <>
<div className="nav p-3 position-sticky ">
  <ul className="list-unstyled d-flex gap-5 mb-0 pb-0 justify-content-evenly">
    <li><NavLink  className="text-decoration-none text-info h4" to="/">Home</NavLink></li>
    <li><NavLink  className="text-decoration-none text-info h4" to="About">About</NavLink></li>
    <li><NavLink  className="text-decoration-none text-info h4" to="Portfolio">Portfolio</NavLink></li>
    <li><NavLink  className="text-decoration-none text-info h4" to="Contact">Contact</NavLink></li>
  </ul>

</div>
  </>;
}

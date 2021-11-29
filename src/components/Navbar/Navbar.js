import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <section className="section__navbar">
      <div className="container__navbar">
        <div className="box__logo">
          <Link to="/Voca">My voca</Link>
        </div>
        <div className="box__add">
          <Link to="/Voca/add">Add</Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;

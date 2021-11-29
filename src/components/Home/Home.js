import React from "react";
import Vocas from "../Voca/Vocas";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <section className="section__home">
      <Navbar />
      <Vocas />
    </section>
  );
}

export default Home;

import React from "react";
import "./Landingpage.css";
import { FaArrowRightLong } from "react-icons/fa6";
const Landingpage = () => {
  return (
    <div className="Body">
      <div>
        <h2 className="subtext">yourfavtechboy!🥷🏾</h2>
        <article>
          <h1 className="heading">
            OMIYEJUWON ADEMOLA
            <br /> BABATUNDE
          </h1>
         <span>Certified Frontend Developer • COWRYWISE Ambassador • Co-Founder SPLITA • Tech Enthusiast </span>
        </article>
        <button className="btn">Lets Build a website for you!</button>
      </div>
      <div>
        <div>
          <img
            src="me.png"
            style={{
              height: "600px",
              padding: "30px",
              borderRadius: "2000px",
              paddingLeft: "90px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;

import React from "react";
import { Link } from "react-router-dom";

export default function Loadanim2() {
  return (
    <>
    <div className="mt-5">
        <h1 style={{color:"white", textAlign:"center"}}>Audience Star Polling System</h1>
    </div>
      <Link to="/api/login">
        <div class="letter-image">
          <div class="animated-mail">
            <div class="back-fold"></div>
            <div class="letter">
              <h5 style={{ textAlign: "center" }}> Click To Start</h5>
              <div class="bg"></div>
              <div class="bar"></div>
              <div class="bar fill1"></div>
              <div class="bar fill2"></div>
              <div class="bar fill3"></div>
              <div class="bar fill4"></div>
              <div class="bar fill1"></div>
              <div class="bar fill5"></div>
              <div class="bar fill6"></div>
              <div class="bar"></div>

              <div class="letter-border"></div>
              <div class="letter-title"></div>
              <div class="letter-context"></div>
              <div class="letter-stamp">
                <div class="letter-stamp-inner"></div>
              </div>
            </div>
            <div class="top-fold"></div>
            <div class="body"></div>
            <div class="left-fold"></div>
          </div>
          <div class="shadow"></div>
        </div>
      </Link>
    </>
  );
}

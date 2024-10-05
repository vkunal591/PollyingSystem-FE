import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContexState from "../context/context";

export default function Navbar() {
  const context = useContext(ContexState);
  const { handlelogout } = context;

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Audience <span style={{ fontSize: "25px" }}>⭐</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/api/participents">
                  Participents
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/api/myprofile">
                  My Profile
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form class="d-flex">
                <Link to="/api/login">
                  <button class="btn btn-outline-success me-2">Log in</button>
                </Link>
              
              </form>
            ) : (
              <form class="d-flex">
              
                  <button class="btn btn-outline-success me-2" onClick={handlelogout}>Log Out</button>
             
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

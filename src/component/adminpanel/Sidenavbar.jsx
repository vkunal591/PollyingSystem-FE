import React from "react";
import { Link } from "react-router-dom";
import User from '../img/user.png'

export default function Sidenavbar() {
  return (
    <>
      <nav
        class="navbar d-block"
        style={{ height: "100vh", width: "250px", backgroundColor: "#e3f2fd" }}
      >
        <div class="card">
          <div class="upper">
            <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid" />
          </div>

          <div class="user text-center">
            <div class="profile"  style={{backgroundClip:"transparent"}}>
              <img src={User} class="rounded-circle" width="80" />
            </div>
          </div>
        </div>
        <div class="w-100" style={{}}>
          <Link
            to="/api/admin/createparticipent"
            class="btn kbtn adminnavbtn"
            type="button"
            style={{ borderRadius: "0px", width: "100%" }}
          >
            Add Participent
          </Link>
          <Link
             to="/api/admin/allparticipents"
            class="btn kbtn adminnavbtn"
            type="button"
            style={{ borderRadius: "0px", width: "100%" }}
          >
            All Participents
          </Link>
          <Link
            to="/api/createuser"
            class="btn kbtn adminnavbtn"
            type="button"
            style={{ borderRadius: "0px", width: "100%" }}
          >
            Create User
          </Link>
          <Link
            to="/api/admin/getallusers"
            class="btn kbtn adminnavbtn"
            type="button"
            style={{ borderRadius: "0px", width: "100%" }}
          >
            All User
          </Link>
          <Link
            to="/api/admin/admincontrol"
            class="btn kbtn adminnavbtn"
            type="button"
            style={{ borderRadius: "0px", width: "100%" }}
          >
            Result Control
          </Link>
          <Link
            to="/api/admin/showresult"
            class="btn kbtn adminnavbtn"
            type="button"
            style={{ borderRadius: "0px", width: "100%" }}
          >
            Show Result 
          </Link>
          <Link
            to="/api/admin"
            class="btn kbtn adminnavbtn"
            type="button"
            style={{ borderRadius: "0px", width: "100%" }}
          >
            Setting
          </Link>
        </div>
      </nav>
    </>
  );
}

import React from "react";
import "./css/profile.css";
import User from './img/user.png'

export default function Profile() {
  return (
    <>
      <div class="container d-flex justify-content-center align-items-center mt-5">
        <div class="card">
          <div class="upper">
            <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid" />
          </div>

          <div class="user text-center">
            <div class="profile">
              <img
                src={User}
                class="rounded-circle"
                width="80"
              />
            </div>
          </div>

          <div class="mt-5 text-center">
            <h4 class="mb-0">User Name</h4>
            <span class="text-muted d-block mb-2">Occupation</span>

            {/* <button class="btn btn-primary btn-sm follow">Follow</button> */}

            <div class="d-flex justify-content-between align-items-center mt-4 px-4 profile-data" style={{textAlign:"left"}}>
              {/* <div class="stats">
                <h6 class="mb-0">Followers</h6>
                <span>8,797</span>
              </div>

              <div class="stats">
                <h6 class="mb-0">Projects</h6>
                <span>142</span>
              </div>

              <div class="stats">
                <h6 class="mb-0">Ranks</h6>
                <span>129</span>
              </div> */}
              <div>
              <p>
                <span>Id Card No.: </span>NC/21/45
              </p>
              <p>
                <span>Class: </span>B.C.A 3rd
                
              </p>
              <p>
                <span>Roll No.: </span> 45
              </p>
              <p>
                <span>Email id: </span> MrKunal@gmail.com
              </p>
              <p>
                <span>Phone No.: </span> 6200*******
              </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

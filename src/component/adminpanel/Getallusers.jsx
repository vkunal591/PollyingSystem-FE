import React, { useContext, useEffect } from "react";
import ContextState from "../../context/context";
import Adminpanel from "./Adminpanel";

export default function Getallusers() {
  const context = useContext(ContextState);
  const { handlegetallusers, allusers } = context;

  useEffect(() => {
    return () => {
      handlegetallusers();
    };
  }, []);

  //   setInterval(() => {
  //     console.log(allusers)
  //   }, 3000);

  return (
    <>
      <div
        className="signin d-flex "
        style={{ backgroundColor: "skyblue", width: "100%", height: "100vh" }}
      >
        <Adminpanel />
        <div className="m-auto" style={{ height: "98vh", width: "80%", overflowX: "scroll" }}>
          <div class="row row-cols-1 row-cols-md-3 g-4" style={{width:"90%"}}>
            {allusers.map((user) => {
              return (
                <div class="col" >
                  <div class="card" style={{height:"20rem"}}>
                    <div class="mt-5 text-center">
                      <h4 class="mb-0">{user.name} </h4>
                      <span class="text-muted d-block mb-2">
                        {user.occupation}
                      </span>

                      {/* <button class="btn btn-primary btn-sm follow">Follow</button> */}

                      <div
                        class="d-flex justify-content-between align-items-center mt-4 px-4 profile-data"
                        style={{ textAlign: "left" }}
                      >
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
                            <span>Id Card No.: </span>
                            {user.student[0].idcardno ||
                              user.teacher[0].idcardno}
                          </p>
                          <p>
                            <span>Class/Depart.: </span>
                            {user.student[0].class ||
                              user.teacher[0].department}
                          </p>
                          {user.student[0].rollno? <p> <span>Roll No.: </span> {user.student[0].rollno}</p>:""}
                          {user.email? <p> <span>Email Id: </span> {user.email}</p>:""}
                       
                          {/* <p>
                            <span>Phone No.: </span> 6200*******
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

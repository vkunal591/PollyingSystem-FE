import React, { useContext, useEffect, useState } from "react";
import Participentspage from "../Participentspage";
import Adminpanel from "./Adminpanel";
import ContextState from "../../context/context";
import { Link } from "react-router-dom";

export default function AdminControl() {
  const context = useContext(ContextState);
  const {
    handlegetparticipents,
    allparticipents,
    handlecalcutepoints,
    setallparticipents,
    totalpoints
  } = context;
  useEffect(() => {
    handlegetparticipents();
   
  }, []);

  //   setInterval(() => {
  //     console.log(allparticipents)
  //   }, 5000);
  return (
    <>
      <div
        className="signin d-flex "
        style={{ backgroundColor: "skyblue", width: "100%", height: "100vh" }}
      >
        <Adminpanel />
        <div
          className="m-auto"
          style={{ height: "98vh", width: "80%", overflowX: "scroll" }}
        >
          <div
            class="row row-cols-1 row-cols-md-3 g-4"
            style={{ width: "90%" }}
          >
            {allparticipents.map((participentdata) => {
              return (
                <div class="col">
                  <div class="card" style={{ height: "20rem" }}>
                    <div class="mt-5 text-center">
                      <h4 class="mb-0">{participentdata.teamleader} </h4>
                      {/* <span class="text-muted d-block mb-0">
                        {participentdata.teamname}
                      </span> */}
                      <span class="text-muted d-block mb-2">
                        {participentdata.category}
                      </span>
                      {/* <span class="text-muted d-block mb-0">
                        {participentdata.content}
                      </span> */}

                      <button class="btn btn-primary btn-sm follow" onClick={()=> handlecalcutepoints(participentdata)}>Result</button>

                      <div
                        class="d-flex justify-content-between align-items-center mt-4 px-4 profile-data"
                        style={{ textAlign: "left" }}
                      >
                        <div class="stats">
                    <h6 class="mb-0">Total Stars</h6>
                    <span>{!participentdata.points?"Null":participentdata.points}</span>
                  </div>
    
                  <div class="stats">
                    <h6 class="mb-0">Total Comment</h6>
                    <span>{!participentdata.comments?"Null":participentdata.comments}</span>
                  </div>
    
                  <div class="stats">
                    <h6 class="mb-0">Ranks</h6>
                    <span>{!participentdata.rank?"Null":participentdata.rank}</span>
                  </div>
                        <div></div>
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

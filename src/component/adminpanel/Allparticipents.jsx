import React from "react";
import Participentspage from "../Participentspage";
import Adminpanel from "./Adminpanel";

export default function Allparticipents() {
  return (
    <>
      <div
        className="signin d-flex "
        style={{ backgroundColor: "skyblue", width: "100%", height: "100vh" }}
      >
        <Adminpanel />
        <div style={{ height: "99vh", width: "85%", overflowX: "scroll" }}>
          <Participentspage />
        </div>
      </div>
    </>
  );
}

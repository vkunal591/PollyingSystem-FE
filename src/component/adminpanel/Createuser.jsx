import React from "react";
import Adminpanel from "./Adminpanel";
import Signinpage from "../Signinpage";

export default function Createuser() {
  return (
    <>
      <div
        className="signin d-flex "
        style={{ backgroundColor: "skyblue", width: "100%", height: "100vh" }}
      >
        <Adminpanel />
        <div style={{ height: "99vh", width: "85%", overflowX: "scroll" }}>
          <Signinpage />
        </div>
      </div>
    
    
    
    </>
  )
}

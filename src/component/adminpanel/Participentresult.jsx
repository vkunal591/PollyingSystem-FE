import React, { useContext,useEffect } from "react";
import Participent from "../Participent";
import ContextState from "../../context/context";
import { Link } from "react-router-dom";
import Adminpanel from "./Adminpanel";

export default function Participentresult() {
  const context = useContext(ContextState);
  const { handlecalcutepoints, allparticipents,handlegetparticipents, setallparticipents,participentresult } =
    context;
    useEffect(() => {
      handlegetparticipents();

      handlecalcutepoints(allparticipents[0])
      return () => {
        console.log(participentresult)
      }
    }, [])
    

  return (
    <>
      <div
        className="signin d-flex "
        style={{ backgroundColor: "skyblue", width: "100%", height: "100vh" }}
      >
        <Adminpanel />
        <div style={{ height: "99vh", width: "85%", overflowX: "scroll" }}>
          {!localStorage.getItem("token") ? (
            <div style={{ color: "white", textAlign: "center" }}>
              <h4>Please Log In</h4>
              <p>You Can poll after login</p>
              <Link to="/api/login" className="btn btn-primary">
                Log in Now
              </Link>
            </div>
          ) : (
          participentresult.map((participentdata) => {
              return (
                <Participent
                  key={participentdata._id}
                  id={participentdata._id}
                  hidden={participentdata.hidden}
                  teamname={participentdata.teamname}
                  teamleader={participentdata.teamleader}
                  category={participentdata.category}
                  content={participentdata.content}
                  points={participentdata.points}
                  comments={participentdata.comments}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

import React, { useContext, useEffect } from "react";
import Participent from "./Participent";
import ContextState from "../context/context";
import { Link } from "react-router-dom";

export default function Participentspage() {
  const context = useContext(ContextState);
  const { handlegetparticipents, allparticipents, setallparticipents } =
    context;
  useEffect(() => {
    handlegetparticipents();
  }, []);

  // const participentsdata = [
  //   {
  //     _id: "653683bc0c760f892e5c2505",
  //     admin: "653681d10c760f892e5c2501",
  //     category: "Dance",
  //     teamname: "The Royals",
  //     teamleader: "Mahi Verma",
  //     content: "Song: ek mai or ek tu",
  //     hidden: false,
  //     points: [],
  //     comments: [],
  //     date: "2023-10-23T14:31:24.722Z",
  //     __v: 0
  //   },
  //   {
  //     _id: "653684740c760f892e5c2507",
  //     admin: "653681d10c760f892e5c2501",
  //     category: "Song",
  //     teamname: "Mr & Mrs",
  //     teamleader: "Mona Verma",
  //     content: "Song: ek dusre se",
  //     hidden: false,
  //     points: [],
  //     comments: [],
  //     date: "2023-10-23T14:34:28.688Z",
  //     __v: 0
  //   },
  //   {
  //     _id: "653684a70c760f892e5c2509",
  //     admin: "653681d10c760f892e5c2501",
  //     category: "Modeling",
  //     teamname: "Mr & Mrs",
  //     teamleader: "Sivani Verma",
  //     content: "Song: Jalwa song",
  //     hidden: false,
  //     points: [],
  //     comments: [],
  //     date: "2023-10-23T14:35:19.859Z",
  //     __v: 0
  //   }
  // ];
  return (
    <>
      <div className="participents-box mx-auto pt-4">
        {!localStorage.getItem("token")? (
          <div style={{ color: "white", textAlign: "center" }}>
            <h4>Please Log In</h4>
            <p>You Can poll after login</p>
            <Link to="/api/login" className="btn btn-primary" >Log in Now</Link>
          </div>
        ) : (
          allparticipents.map((participentdata) => {
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
    </>
  );
}

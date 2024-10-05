import React, { useContext } from "react";
import Adminpanel from "./Adminpanel";
import ContextState from "../../context/context";

export default function Createparticipent() {
  const context = useContext(ContextState);
  const { Input, handleChange, handlecreateparticipent } = context;



  return (
    <>
      <div
        className="signin "
        style={{ backgroundColor: "white", width: "100%", height: "100vh" }}
      >
        <Adminpanel />

        <form
          className="  position-absolute  "
          onSubmit={handlecreateparticipent}
          style={{width:"82%",height:"99vh",left:"17%", top:"20%", backgroundColor:"skyblue", padding:"1rem"}}
        >
          <h4>Add New Participent</h4>
          <hr />
          <div class="mb-3">
            <label for="category" class="form-label">
              Category
            </label>
            <input
              type="text"
              class="form-control"
              id="category"
              name="category"
              onChange={handleChange}
            />
             <label for="teamname" class="form-label">
              Team Name
            </label>
            <input
              type="text"
              class="form-control"
              id="teamname"
              name="teamname"
              onChange={handleChange}
            />
             <label for="teamleader" class="form-label">
              Team Leader
            </label>
            <input
              type="text"
              class="form-control"
              id="teamleader"
              name="teamleader"
              onChange={handleChange}
            />
             <label for="content" class="form-label">
              Content
            </label>
            <input
              type="text"
              class="form-control"
              id="content"
              name="content"
              onChange={handleChange}
            />
           
          </div>
   
          <button type="submit" class="w-100 mt-2 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

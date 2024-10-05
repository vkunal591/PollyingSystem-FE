import React,{useContext} from "react";
import "./css/login.css";
import Context from '../context/context'

export default function Loginpage() {
  const context = useContext(Context);
  const {Input, handleChange,handlelogin , handlesignin} = context;



  return (
    <>
      <div className="login ">
        <form className="form-box position-absolute  translate-middle" onSubmit={handlelogin}>
            <h4>Log In</h4>
            <hr />
          <div class="mb-3">
            <label for="email" class="form-label">
              Id Card No
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Enter your ID Card No. like NC/BCA/21/45 .com.
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Date Of Birth
            </label>
            <input
              type="text"
              class="form-control"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>
      
          <button type="submit" class="w-100 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

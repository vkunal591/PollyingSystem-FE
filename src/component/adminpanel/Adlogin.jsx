import React,{useContext} from "react";
import Context from '../../context/context'

export default function Adlogin() {

        const context = useContext(Context);
        const {Input, handleChange,handleadminlogin , handleadminsignin} = context;


  return (
    <>
      <div className="login ">
        <form
          className="form-box position-absolute  translate-middle"
          onSubmit={handleadminlogin}
        >
          <h4>Log In</h4>
          <hr />
          <div class="mb-3">
            <label htmlFor="email" class="form-label">
              Email Id
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
              Enter your Email Id like admin@ad.com.
            </div>
          </div>
          <div class="mb-3">
            <label htmlFor="password" class="form-label">
              Password
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

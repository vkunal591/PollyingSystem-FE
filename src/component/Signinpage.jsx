import React,{useState,useContext} from "react";
import "./css/login.css";
import Context from '../context/context'

export default function Signinpage() {
    const context = useContext(Context);
    const {Input, handleChange,handlesignin} = context;
  
  return (
    <>
      <div className="signin ">
        <form className="form-box position-absolute  translate-middle" onSubmit={handlesignin}>
          <h4>Sign In</h4>
          <hr />
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="name"
              class="form-control"
              id="name"
              name="name"
              onChange={handleChange}
            />
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              onChange={handleChange}
            />
            <label for="phone" class="form-label">
              Phone
            </label>
            <input
              type="number"
              class="form-control"
              id="phone"
              name="phone"
              onChange={handleChange}
            />
            <label for="occupation" class="form-label">
              Occupation
            </label>
            <select
              class="form-select"
              id="occupation"
              name="occupation"
              aria-label="Default select example"
              onChange={handleChange}

            >
              <option selected>Open this select menu</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            <div id="student" class="form-text" style={{ display: `${Input.occupation == "student"?"block" :"none"}` }}>
              <label for="studentidcardno" class="form-label">
                Id Card No.
              </label>
              <input
                type="text"
                class="form-control"
                id="studentidcardno"
                name="studentidcardno"
                onChange={handleChange}
              />
              <label for="class" class="form-label">
                Class
              </label>
              <select
                class="form-select"
                id="class"
                name="class"
                aria-label="Default select example"
              onChange={handleChange}

              >
                <option selected>Open this select menu</option>
                <option value="B.C.A-1st">B.C.A 1st</option>
                <option value="B.C.A-2nd">B.C.A 2nd</option>
                <option value="B.C.A-3rd">B.C.A 3rd</option>
                <option value="M.C.A-1st">M.C.A 1st</option>
                <option value="M.C.A-3rd">M.C.A 2nd</option>
                <option value="M.C.A-4th">M.C.A 4th</option>
                <option value="other">Other</option>
              </select>
              <label for="rollno" class="form-label">
              Roll No.
            </label>
            <input
              type="number"
              class="form-control"
              id="rollno"
              name="rollno"
              onChange={handleChange}
            />
            </div>
            <div id="teacher" class="form-text" style={{ display: `${Input.occupation == "teacher"?"block" :"none"}` }}>
              <label for="department" class="form-label">
                Department
              </label>
              <select
                class="form-select"
                id="department"
                name="department"
                aria-label="Default select example"
                onChange={handleChange}

              >
                <option selected>Open this select menu</option>
                <option value="Computer Application">
                  Department of Computer Application
                </option>
                <option value="Business Management">
                  Department of Business Management
                </option>
                <option value="Englist">Englist</option>
                <option value="Education">Departmnet of Education</option>
                <option value="Other">Other</option>
              </select>
              <label for="teacheridcardno" class="form-label">
                Id Card No.
              </label>
              <input
                type="text"
                class="form-control"
                id="teacheridcardno"
                name="teacheridcardno"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
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
          <button type="submit" class="w-100 mt-2 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

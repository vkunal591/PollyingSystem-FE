import React from "react";
import ContexState from './context/ContexState'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Loginpage from "./component/Loginpage";
import Navbar from "./component/Navbar";
import Signinpage from "./component/Signinpage";
import Participentspage from "./component/Participentspage";
import Loadanim1 from "./component/Loadanim1";
import Loadanim2 from "./component/Loadanim2";
import Profile from "./component/Profile";
import Adminpanel from "./component/adminpanel/Adminpanel";
import Warning from "./component/alert/Warning";
import Adlogin from "./component/adminpanel/Adlogin";
import Createparticipent from "./component/adminpanel/Createparticipent";
import Allparticipents from "./component/adminpanel/Allparticipents";
import Getallusers from "./component/adminpanel/Getallusers";
import AdminControl from "./component/adminpanel/AdminControl";
import Participentresult from "./component/adminpanel/Participentresult";
import Createuser from "./component/adminpanel/Createuser";

function App() {
  return (
      <>
    <Router>
    <ContexState>
        <Navbar />
        <Warning />
        <Routes>
          <Route exact path="/" element={<React.Fragment>
    
            <Loadanim2 />
          </React.Fragment>} />{" "}
          <Route
            exact
            path="/api/admin/login"
            element={
              <React.Fragment>
                <Adlogin />
              </React.Fragment>
            }
          ></Route>{" "}
             <Route
            exact
            path="/api/admin/createparticipent"
            element={
              <React.Fragment>
          
                <Createparticipent />
              </React.Fragment>
            }
          ></Route>{" "}
           <Route
            exact
            path="/api/admin/allparticipents"
            element={
              <React.Fragment>
          
                <Allparticipents />
              </React.Fragment>
            }
          ></Route>{" "}
            <Route
            exact
            path="/api/admin/getallusers"
            element={
              <React.Fragment>
                <Getallusers />
              </React.Fragment>
            }
          ></Route>{" "}
           <Route
            exact
            path="/api/admin/admincontrol"
            element={
              <React.Fragment>
                <AdminControl />
              </React.Fragment>
            }
          ></Route>{" "}
              <Route
            exact
            path="/api/admin/showresult"
            element={
              <React.Fragment>
                <Participentresult />
              </React.Fragment>
            }
          ></Route>{" "}
          <Route
            exact
            path="/api/admin"
            element={
              <React.Fragment>
                <Adminpanel />
              </React.Fragment>
            }
          ></Route>{" "}

          <Route
            exact
            path="/api/signin"
            element={
              <React.Fragment>
                <Signinpage />
              </React.Fragment>
            }
          ></Route>
          <Route
            exact
            path="/api/createuser"
            element={
              <React.Fragment>
                <Createuser />
              </React.Fragment>
            }
          ></Route>
           <Route
            exact
            path="/api/login"
            element={
              <React.Fragment>
                <Loginpage />
              </React.Fragment>
            }
          ></Route>
             <Route
            exact
            path="/api/participents"
            element={
              <React.Fragment>
                <Participentspage />
              </React.Fragment>
            }
          ></Route>
                <Route
            exact
            path="/api/myprofile"
            element={
              <React.Fragment>
                <Profile />
              </React.Fragment>
            }
          ></Route>
        </Routes>{" "}
    </ContexState>
    </Router>
      </>
  );
}

export default App;

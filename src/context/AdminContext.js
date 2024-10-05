import { useState } from "react";
import React from "react";
import Context from "./context";
import { useNavigate } from "react-router-dom";

// import LearnMore from "../../../learnmore.json";

const ContexState = props => {
  const navigate = useNavigate();
  const host = "http://127.0.0.1:3000";

  const [Input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    studentidcardno: "",
    rollmo: "",
    class: "",
    department: "",
    teacheridcardno: "",
    password: ""
  });

  // handle Input of signin or login
  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setInput({
      ...Input,
      [name]: value
    });
  };

  // handle Login function
  const handleadminlogin = async e => {
    e.preventDefault();
    // Api Call
    console.log(Input.email);
    const response = await fetch(`${host}/api/admin/loginadmin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
  
        email: Input.email,
        password: Input.password
      })
    });

    const json = await response.json();
    console.log(json)
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/api/participents");
    } else {
      navigate("/api/login");
    }
  };

  // handle Log out Function
  const handleadminlogout = () => {
    localStorage.removeItem("token");
    navigate("/api/admin/login");
  };

  // handle signin function
  const handlesignin = async e => {
    e.preventDefault();
    // Api Call

    const response = await fetch(`${host}/api/admin/createadmin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: Input.name,
        email: Input.email,
        phone: Input.phone,
        occupation: Input.occupation,
        password: Input.password
      })
    });

    const json = await response.json();

    // if (json.success) {
    //   // localStorage.setItem("token", json.authtoken);
    //   navigate("/api/participents");
    // } else {
    //   navigate("/");
    // }

    setInput({
      name: "",
      email: "",
      phone: "",
      occupation: "",
      studentidcardno: "",
      rollmo: "",
      class: "",
      department: "",
      teacheridcardno: "",
      password: ""
    });
  };

  // handle Get participents function
  const p = [];
  const [allparticipents, setallparticipents] = useState(p);

  const handlegetparticipents = async e => {
    const response = await fetch(`${host}/api/participent/getparticipents`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const jsons = await response.json();
    setallparticipents(jsons);
    // console.log(allparticipents)
  };

  // Handle Poll Of participent
  const [participentstate, setparticipentstate] = useState({});
  const [viewpolls, setviewpolls] = useState([])

  const handlepoll = async e => {
    e.preventDefault();
    // Api Call
    console.log(participentstate.id);
    const response = await fetch(`${host}/api/poll/dopoll`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        participentid: `${participentstate.id}`,
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({
        points: Input.points,
        comments: {
          body: Input.comment
        }
      })
    });
    const json = await response.json();

    // setInput({
    //   points: "",
    //   comments: ""
    // });
  };

  // handle view all poll
  const handleviewpolls = async e =>  {
    e.preventDefault();
    // Api Call
    console.log(participentstate.id);
    const response = await fetch(`${host}/api/poll/getpolls`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        participentid: `${participentstate.id}`,
        "auth-token": localStorage.getItem("token")
      }
    
    });
    const json = await response.json();
    setviewpolls(json)
    // console.log(json)


  };

  return (
    <Context.Provider
      value={{
        Input,
        handleChange,
        handleadminlogin,
        handleadminsignin,
        handleadminlogout,
        handlegetparticipents,
        allparticipents,
        setallparticipents,
        handlepoll,
        participentstate,
        setparticipentstate,
        handleviewpolls,
        viewpolls,
        setviewpolls
      }}
    >
      {" "}{props.children}{" "}
    </Context.Provider>
  );
};

export default ContexState;

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
    password: "",
    category: "",
    teamname: "",
    teamleader: "",
    content: ""
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
  const handlelogin = async e => {
    e.preventDefault();
    // Api Call
    console.log(Input.email);
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        idcardno: Input.email,
        email: Input.email,
        password: Input.password
      })
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/api/participents");
    } else {
      navigate("/api/login");
    }
  };

  // handle Log out Function
  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/api/login");
  };

  // handle signin function
  const handlesignin = async e => {
    e.preventDefault();
    // Api Call

    const response = await fetch(`${host}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: Input.name,
        email: Input.email,
        phone: Input.phone,
        occupation: Input.occupation,
        student: {
          idcardno: Input.studentidcardno,
          rollno: Input.rollno,
          class: Input.class
        },
        teacher: {
          idcardno: Input.teacheridcardno,
          department: Input.department
        },
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
    console.log(jsons);
    return jsons;
  };

  // Handle Poll Of participent
  const [participentstate, setparticipentstate] = useState([]);
  const [viewpolls, setviewpolls] = useState([]);

  const handlepoll = async porps => {
    // e.preventDefault()
    // Api Call
    console.log(participentstate.id);
    const response = await fetch(`${host}/api/poll/dopoll`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        participentid: `${porps.id}`,
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
    window.stop();
    console.log(json);
    // window.location.reload();
    // setInput({
    //   points: "",
    //   comments: ""
    // });
    setTimeout(() => {}, 2000);
  };

  // handle view all poll
  const handleviewpolls = async porps => {
    // e.preventDefault();
    // Api Call
    console.log(porps);
    const response = await fetch(`${host}/api/poll/getpolls`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        participentid: `${porps.id}`,
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = await response.json();
    setviewpolls(json);
    return json;
  };

  // handle view all poll
  const handlepollno = async porps => {
    // e.preventDefault();
    // Api Call
    console.log(porps);
    const response = await fetch(`${host}/api/poll/getpollno`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        pollerid: `${porps.poller_id}`,
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = await response.json();

    return json;
  };
  // handle Admin Login function
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
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/api/admin");
    } else {
      navigate("/api/admin/login");
    }
  };

  // handle signin function
  const handlecreateparticipent = async () => {
    // Api Call

    const response = await fetch(`${host}/api/participent/createparticipent`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({
        category: Input.category,
        teamname: Input.teamname,
        teamleader: Input.teamleader,
        content: Input.content
      })
    });

    const json = await response.json();

    if (json.id) {
      window.location.reload();
    } else {
      navigate("/api/admin/createparticipent");
    }
  };

  // handle Get all users

  const [allusers, setAllusers] = useState([]);
  const handlegetallusers = async porps => {
    // e.preventDefault();
    // Api Call

    const response = await fetch(`${host}/api/auth/getallusers`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = await response.json();
    setAllusers(json);
    console.log(json);
  };

  // Handle Participent Delete
  const handledelete = async porps => {
    // e.preventDefault();
    // Api Call

    const response = await fetch(`${host}/api/participent/deleteparticipent`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
        participentid: `${porps.id}`
      }
    });

    const json = await response.json();
    console.log(json);

    if (json._id) {
      window.location.reload();
      navigate("/api/admin/allparticipents");
    } else {
      navigate("/api/admin");
    }
  };

  // Handle Participent Delete
  const handlepollstart = async (porps, point, comments, rank) => {
    // e.preventDefault();
    // Api Call
    console.log(porps.hidden + "lkl");
    const response = await fetch(`${host}/api/participent/startpoll`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
        participentid: `${porps.id}`
      },
      body: JSON.stringify({
        hidden: `${porps.hidden ? false : true}`,
        points: point,
        comments: comments,
        rank: rank
      })
    });

    const json = await response.json();
    console.log(json);

    window.location.reload();
    // if (!json.points) {
    //   navigate("/api/admin/allparticipents");
    // } else {
    //   navigate("/api/admin/admincontrol");
    // }
  };

  // handle Get all users

  const [alladmin, setAlladmin] = useState({});
  const handlegetadmin = async porps => {
    // e.preventDefault();
    // Api Call

    const response = await fetch(`${host}/api/admin/getadmin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    })
      .then()
      .catch(console.log("now"));
    const json = await response.json();
    setAlladmin(json);
  };

  const [totalpoints, settotalpoints] = useState("");
  const [participentresult, setParticipentresult] = useState([])
  // Calculate Points
  const handlecalcutepoints = async participentdata => {
    const porps = {
      id: participentdata._id,
      poller_id: participentdata.poller_id
    };
    const points = await handleviewpolls(porps);
    const pollno = await handlepollno(points[0]);
    const participentsno = await handlegetparticipents();

    let comments = 0;
    let point = 0;
    if (pollno.length >= participentsno.length - 2) {
      console.log("Done Boss");
      for (let i = 0; i < points.length; i++) {
        point = point + points[i].points;
        if (points[i].comments[0].body) {
          comments = ++comments;
        }
        console.log(comments);
        settotalpoints(point);
        console.log(totalpoints);
      }

      await handlepollstart(porps, point, comments);
    } else {
      console.log("Not Eligible");
    }
  
    let pointsArray = [];
    let ranks = [];
    for (let i = 0; i < participentsno.length; i++) {
      const element = participentsno[i];
      pointsArray[i] = participentsno[i].points;
    }
    pointsArray.sort(function(a, b) {
      return a - b;
    });
    let k = 0;
    let l = 1;
    for (let index = 0; index < pointsArray.length; index++) {
      for (let i = 0; i < pointsArray.length; i++) {
        if (pointsArray[pointsArray.length - l] == participentsno[i].points) {
          ranks[k] = participentsno[i];
          k++;
          l++;
        
          console.log(i);
        }
      }
    }

    let rank;
    for (let i = 0; i < ranks.length; i++) {
      const element = ranks[i];
      console.log(ranks[0]._id);
      if (porps.id === ranks[i]._id) {
        rank = ++i;
        console.log(rank);
      }
    }
    console.log(porps, points, comments, rank);
    await handlepollstart(porps, point, comments, rank);
   
    for (let i = 0; i < 4; i++) {
      
      setParticipentresult(ranks)
      
    }
  window.stop();
    console.log(pointsArray);
    console.log(ranks, "kllll");
    // console.log(pointsArray[pointsArray.length]);
    // console.log(pointsArray[pointsArray.length - 1]);
    // console.log(pointsArray[pointsArray.length - 2]);
    // console.log(participentdata);
    // console.log(points);
    // console.log(participentsno.length);
    // console.log(pollno.length);
    return ranks;
  };

  return (
    <Context.Provider
      value={{
        Input,
        handleChange,
        handlelogin,
        handlesignin,
        handlelogout,
        handlegetparticipents,
        allparticipents,
        setallparticipents,
        handlepoll,
        participentstate,
        setparticipentstate,
        handleviewpolls,
        viewpolls,
        setviewpolls,
        handleadminlogin,
        handlecreateparticipent,
        handlegetallusers,
        allusers,
        handledelete,
        handlepollstart,
        handlegetadmin,
        alladmin,
        handlecalcutepoints,
        totalpoints,
        participentresult
      }}
    >
      {" "}{props.children}{" "}
    </Context.Provider>
  );
};

export default ContexState;

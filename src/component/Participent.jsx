import React, { useContext, useEffect, useState } from "react";
import "./css/participent.css";
import ContextState from "../context/context";

export default function Participent(porps) {
  const context = useContext(ContextState);
  const {
    handlegetparticipents,
    allparticipents,
    setInput,
    Input,
    handleChange,
    handlepoll,
    participentstate,
    setparticipentstate,
    viewpolls,
    setviewpolls,
    handleviewpolls,
    handledelete,
    handlepollstart,
    handlegetadmin,
    alladmin
  } = context;
  const host = "http://127.0.0.1:3000";

  const [start, setstart] = useState(porps.hidden);

  useEffect(() => {
    setparticipentstate(porps);
    handlegetadmin().then().catch(console.log("go"));
  }, []);

  setTimeout(() => {
    //   // //   console.log(participentstate.id)
  }, 6000);
  setInterval(() => {
    // console.log( viewpolls[0].comments[0].body)
    // console.log(alladmin)
  }, 6000);

  return (
    <>
      {/* <!--Start Poll Modal --> */}
      <div
        class="modal fade modal-dialog modal-lg"
        id={"id" + `${porps.id}` + "1"}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {porps.teamname}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={() => handlepoll(porps, ``,``)}>
                <div class="mb-3">
                  <span className="poll-rate">Rate Your Star: </span>
                  <br className="br-phone" />
                  <input
                    type="radio"
                    class="btn-check"
                    name="points"
                    id={"option5" + `${porps.id}`}
                    value="1"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <label
                    class="btn kbtn mx-1"
                    htmlFor={"option5" + `${porps.id}`}
                  >
                    1
                  </label>
                  <br className="br-phone" />

                  <input
                    type="radio"
                    class="btn-check"
                    name="points"
                    id={"option6" + `${porps.id}`}
                    value="2"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <label
                    class="btn kbtn mx-1"
                    htmlFor={"option6" + `${porps.id}`}
                  >
                    2
                  </label>
                  <br className="br-phone" />

                  <input
                    type="radio"
                    class="btn-check"
                    name="points"
                    id={"option7" + `${porps.id}`}
                    onChange={handleChange}
                    value="3"
                    autoComplete="off"
                  />
                  <label
                    class="btn kbtn mx-1"
                    htmlFor={"option7" + `${porps.id}`}
                  >
                    3
                  </label>
                  <br className="br-phone" />

                  <input
                    type="radio"
                    class="btn-check"
                    name="points"
                    id={"option8" + `${porps.id}`}
                    onChange={handleChange}
                    value="4"
                    autoComplete="off"
                  />
                  <label
                    class="btn kbtn mx-1"
                    htmlFor={"option8" + `${porps.id}`}
                  >
                    4
                  </label>
                  <br className="br-phone" />

                  <input
                    type="radio"
                    class="btn-check"
                    name="points"
                    id={"option9" + `${porps.id}`}
                    onChange={handleChange}
                    value="5"
                    autoComplete="off"
                  />
                  <label
                    class="btn kbtn mx-1"
                    htmlFor={"option9" + `${porps.id}`}
                  >
                    5
                  </label>
                  <br className="br-phone" />

                  <input
                    type="radio"
                    class="btn-check"
                    name="points"
                    id={"option10" + `${porps.id}`}
                    onChange={handleChange}
                    value="6"
                    autoComplete="off"
                  />
                  <label
                    class="btn kbtn mx-1"
                    htmlFor={"option10" + `${porps.id}`}
                  >
                    6
                  </label>
                  <br className="br-phone" />

                  <input
                    type="radio"
                    class="btn-check"
                    name="points"
                    id={"option11" + `${porps.id}`}
                    onChange={handleChange}
                    value="7"
                    autoComplete="off"
                  />
                  <label
                    class="btn kbtn mx-1"
                    htmlFor={"option11" + `${porps.id}`}
                  >
                    7
                  </label>
                  <br className="br-phone" />

                  <input
                    type="radio"
                    class="btn-check"
                    name="points"
                    id={"option12" + `${porps.id}`}
                    onChange={handleChange}
                    value="8"
                    autoComplete="off"
                  />
                  <label
                    class="btn kbtn mx-1"
                    htmlFor={"option12" + `${porps.id}`}
                  >
                    8
                  </label>
                  <br className="br-phone" />

                  <input
                    type="radio"
                    class="btn-check"
                    name="points"
                    id={"option13" + `${porps.id}`}
                    onChange={handleChange}
                    value="9"
                    autoComplete="off"
                  />
                  <label
                    class="btn kbtn mx-1"
                    htmlFor={"option13" + `${porps.id}`}
                  >
                    9
                  </label>
                  <br className="br-phone" />

                  <input
                    type="radio"
                    class="btn-check"
                    name="points"
                    id={"option14" + `${porps.id}`}
                    onChange={handleChange}
                    value="10"
                    autoComplete="off"
                  />
                  <label
                    class="btn kbtn mx-1"
                    htmlFor={"option14" + `${porps.id}`}
                  >
                    10
                  </label>
                </div>
                <div class="mb-3">
                  <label htmlFor="comment" class="col-form-label">
                    Comment:
                  </label>
                  <textarea
                    class="form-control"
                    id="comment"
                    name="comment"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  {porps.hidden ? (
                    <button type="submit" class="btn btn-primary">
                      Save Poll
                    </button>
                  ) : (
                    <span class="btn btn-primary">Poll Closed</span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- View Polls Modal --> */}
      <div
        class="modal fade"
        id={"id" + `${porps.id}` + "2"}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {porps.teamname}'s Polls
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {viewpolls.map((poll) => {
                return (
                  <p key={poll._id}>
                    <span>{poll.pollername} : </span>
                    {poll.points}
                  
                    {/* {poll.points == 1 ? "⭐" : ""}
                    {poll.points == 2 ? "⭐⭐" : ""}
                    {poll.points == 3 ? "⭐⭐⭐" : ""}
                    {poll.points == 4 ? "⭐⭐⭐⭐" : ""}
                    {poll.points == 5 ? "⭐⭐⭐⭐⭐" : ""} */}
                  </p>
                );
              })}
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>

      {/* <!-- View Comments Modal --> */}
      <div
        class="modal fade"
        id={"id" + `${porps.id}` + "3"}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {porps.teamname}'s Comments
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {viewpolls.map((poll) => {
                return (
                  <p key={poll._id}>
                    <span style={{ fontWeight: "500" }}>
                      {poll.pollername}:{" "}
                    </span>{" "}
                    {!poll.comments[0].body
                      ? "No Comments"
                      : poll.comments[0].body}
                  </p>
                );
              })}
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>

      <div class="card text-center mt-4" key={porps.id}>
        <div
          class="form-check form-switch px-5 py-1"
          style={{ textAlign: "right" }}
        >
          <label class="form-check-label" htmlFor="flexSwitchCheckDefault">
            Voting
          </label>
          <button
            class="btn"
            onClick={() => {
              handlepollstart(porps);
            }}
            style={{
              float: "none",
              marginLeft: "0.6rem",
              borderColor: "black",
              width: "4rem",
              height: "1.5rem",
              padding: "0px",
              backgroundColor: "green",
              color: "white",
              fontWeight: "900"
            }}
          >
            {start ? "Started" : "Close"}
          </button>

          <button
            class="btn"
            onClick={() => {
              handledelete(porps);
            }}
            style={{
              float: "none",
              marginLeft: "0.6rem",
              borderColor: "black",
              width: "1.5rem",
              height: "1.5rem",
              padding: "0px",
              backgroundColor: "red",
              color: "white",
              fontWeight: "900"
            }}
          >
            D
          </button>
        </div>
        <div class="card-header">
          <h3> {porps.teamname}</h3>
        </div>
        <div class="card-body participent-card" style={{ textAlign: "left" }}>
          <div className="d-flex">
            <p>
              <span>Team Leader: </span> {porps.teamleader}
            </p>
            <p>
              <span>Category: </span> {porps.category}
            </p>
            <p>
              <span>Content: </span> {porps.content}
            </p>
          </div>
          <div className="d-flex">
            <p>
              <span>Status: </span>
              {!porps.hidden ? "Active" : "Inactive"}
            </p>
            <p>
              <span>Total Stars (⭐): </span>
              {!porps.points ? porps.points : "No Points"}
            </p>
            <p>
              <span>Comments: </span>{" "}
              {!porps.comments ? porps.comments : "No Comments"}
            </p>
          </div>
        </div>
        <div class="card-footer text-body-secondary d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-primary mx-1"
            data-bs-toggle="modal"
            data-bs-target={"#id" + `${porps.id}` + "1"}
          >
            Start Poll
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
          {alladmin.name ? (
            <>
              <button
                type="button"
                class="btn btn-primary mx-1"
                data-bs-toggle="modal"
                data-bs-target={"#id" + porps.id + "2"}
                onClick={() => handleviewpolls(porps)}
              >
                {" "}
                View Polls{" "}
              </button>
              <button
                type="button"
                class="btn btn-primary mx-1"
                data-bs-toggle="modal"
                data-bs-target={"#id" + porps.id + "3"}
                onClick={() => handleviewpolls(porps)}
              >
                View Comments
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

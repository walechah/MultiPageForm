import React from "react";

import { useNavigate } from "react-router-dom";

function ShowDetails({ firstName, lastName, email, occupation, city, bio }) {
  const navigate = useNavigate();
  const GoBack = () => {
    navigate("/SecondForm");
  };

  const confirm = () => {
    navigate("/success");
  };
  return (
    <div className="last-form">
      <div className="first-name">
        <h2>First Name</h2>
        <p>{firstName}</p>
      </div>
      <div className="Last-name">
        <h2>Last Name</h2>
        <p>{lastName}</p>
      </div>
      <div className="Email">
        <h2>Email</h2>
        <p>{email}</p>
      </div>

      <div className="first-name">
        <h2>Occupation</h2>
        <p>{occupation}</p>
      </div>
      <div className="first-name">
        <h2>City</h2>
        <p>{city}</p>
      </div>
      <div className="first-name">
        <h2>Bio</h2>
        <p>{bio}</p>
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "skyblue" }}
          onClick={() => {
            confirm();
          }}
        >
          Confirm and Continue
        </button>
        <button
          onClick={() => {
            GoBack();
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ShowDetails;

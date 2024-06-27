import React from "react";
import { useNavigate } from "react-router-dom";

export default function Name({
  setFirstName,
  setLastName,
  setEmail,
  firstName,
  lastName,
  email,
}) {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/SecondForm");
  };

  return (
    <div className="first-form">
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        value={lastName}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button style={{ backgroundColor: "skyblue" }} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

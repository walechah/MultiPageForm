import React from "react";
import { useNavigate } from "react-router-dom";

function SecondForm({ setOccupation, setCity, setBio, occupation, city, bio }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleContinue = () => {
    navigate("/show-details");
  };

  return (
    <div>
      <div className="first-form">
        <input
          type="text"
          placeholder="Occupation"
          onChange={(e) => {
            setOccupation(e.target.value);
          }}
          value={occupation}
        />
        <input
          type="text"
          placeholder="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
        />
        <input
          type="text"
          placeholder="Bio"
          onChange={(e) => {
            setBio(e.target.value);
          }}
          value={bio}
        />
        <div className="buttons">
          <button
            style={{ backgroundColor: "skyblue" }}
            onClick={handleContinue}
          >
            Continue
          </button>
          <button onClick={handleBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default SecondForm;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Name from "./Components/Name";
import SecondForm from "./Components/SecondForm";
import ShowDetails from "./Components/ShowDetails";
import Success from "./Components/Success";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Name
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              firstName={firstName}
              lastName={lastName}
              email={email}
            />
          }
        />
        <Route
          path="/SecondForm"
          element={
            <SecondForm
              setOccupation={setOccupation}
              setCity={setCity}
              setBio={setBio}
              occupation={occupation}
              city={city}
              bio={bio}
            />
          }
        />
        <Route
          path="/show-details"
          element={
            <ShowDetails
              firstName={firstName}
              lastName={lastName}
              email={email}
              occupation={occupation}
              city={city}
              bio={bio}
            />
          }
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;

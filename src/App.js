import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enable or not
  const [alert, setalert] = useState(null);
  let showalert = (message, type) => {
    setalert({
      msg: message,
      ty: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#02122a";
      showalert("Dark mode is Enable", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode is Enable", "Success");
    }
  };
  return (
    <>
      <Navbar mode={mode} to={toggleMode} />
      <Alert alert={alert} />
      <TextForm mode={mode} />
      <div className="container">
        {/* <Navbar title="head" link="LINK12" /> */}
      </div>
      <About />
    </>
  );
}

export default App;

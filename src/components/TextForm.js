import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Convert to uppercase " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log("Convert to uppercase " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCLClick = () => {
    // console.log("Convert to uppercase " + text);
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On chnage");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text="new twxt" //wrog way to change the state
  //   setText("new text"); //Correct way to change the state
  // this is Dark mode code//
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#02122a" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Upercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCLClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text ? text.split(" ").length : 0} words and {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter somthing in Text Box above to preview it hare"}
        </p>
      </div>
      <br />
      <hr />
    </>
  );
}

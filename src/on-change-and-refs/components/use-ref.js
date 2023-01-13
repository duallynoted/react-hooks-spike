import React, { useRef, useEffect } from "react";

function UseRef() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      if (e.target.id === "nameInput") {
        ageRef.current.focus();
      }
      if (e.target.id === "ageInput") {
        marriedRef.current.focus();
      }
      if (e.target.id === "marriedInput") {
        e.preventDefault();
        submitRef.current.focus();
      }
    }
  };
  const handleSubmit = () => {
    alert("Your form was submitted successfully");
  };
  return (
    <div>
      <div className="form-field">
        <span>Name: </span>
        <input
          id="nameInput"
          ref={nameRef}
          onKeyDown={handleKeyPress}
          type="text"
        />
      </div>
      <div className="form-field">
        <span>Age: </span>
        <input
          id="ageInput"
          ref={ageRef}
          onKeyDown={handleKeyPress}
          type="text"
        />
      </div>
      <div className="form-field">
        <span>Married: </span>
        <input
          id="marriedInput"
          ref={marriedRef}
          onKeyDown={handleKeyPress}
          type="checkbox"
        />
      </div>
      <button
        id="submitButton"
        onClick={handleSubmit}
        onKeyDown={handleKeyPress}
        ref={submitRef}
      >
        Submit
      </button>
    </div>
  );
}

export default UseRef;

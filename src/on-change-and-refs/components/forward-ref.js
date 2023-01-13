import React, { useEffect, useRef } from "react";
import Input from "../components/input";

function ForwardTheRef() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      lastNameRef.current.focus();
    }
  };
  const inputStyle = {
    width: "400px",
    height: "40px",
    fontSize: "30px",
    marginBottom: "10px",
  };
  return (
    <div>
      <Input
        ref={firstNameRef}
        handleOnKeyDown={handleOnKeyDown}
        placeholder="type first name here"
        style={inputStyle}
      />
      <Input
        id="lastNameInput"
        ref={lastNameRef}
        handleOnKeyDown={handleOnKeyDown}
        placeholder="type last name here"
        style={inputStyle}
      />
    </div>
  );
}

export default ForwardTheRef;

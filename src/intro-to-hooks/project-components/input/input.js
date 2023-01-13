import React from "react";
import PropTypes from "prop-types";

function Input({ placeholder, type }) {
  return <input placeholder={placeholder} type={type}></input>;
}

Input.propTypes = {
  children: PropTypes.element,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
export default Input;

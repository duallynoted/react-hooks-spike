import React from "react";
import PropTypes from "prop-types";

const NameTag = (props) => {
  const { firstName, lastName, style } = props;
  if (!firstName && !lastName) {
    return (
      <div className="name">
        <h3>Invalid Name </h3>
      </div>
    );
  }
  return (
    <div className="name">
      <h3 style={style}>First Name: {firstName} </h3>
      <h3 style={style}>Last Name: {lastName}</h3>
      {firstName === "Michael" && <h4 style={{ color: "purple" }}>VIP</h4>}
    </div>
  );
};

NameTag.propTypes = {
  children: PropTypes.element,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  style: PropTypes.object,
};
export default NameTag;

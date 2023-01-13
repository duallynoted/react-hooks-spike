import React from "react";

function Input(props, ref) {
  // One can either destructure props in the function's argument or, and
  // this is personally preferred, pass the props object and destructure in
  // another variable. Either way, ref should be passed outside of any props
  // object. ex: ({ handleOnKeyDown, placeholder, style}, ref) or, like above.
  const { handleOnKeyDown, placeholder, style } = props;
  return (
    <input
      onKeyDown={handleOnKeyDown}
      ref={ref}
      placeholder={placeholder}
      style={style}
    />
  );
}

const ForwardedRef = React.forwardRef(Input);
export default ForwardedRef;

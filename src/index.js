import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*This was rendering in strict mode like this: <React.StrictMode> <App/> </React.StrictMode>. This causes
 the application to be rendered twice. While this can aid in debugging, it was causing side effects while
 trying to learn lifecyles with hooks' useEffect() function. I removed the strict mode wrapper. It
 only causes the double render in development, and is turned off in production level code.*/
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

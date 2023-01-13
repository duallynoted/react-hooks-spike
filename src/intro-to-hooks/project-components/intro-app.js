import React, { useState } from "react";
import "./intro-app.scss";
import NameTag from "./name-tag/name-tag";
import Input from "./input/input";
import { initialNames } from "./project-constants";

function IntroApp() {
  const [names, setNames] = useState(initialNames);
  return (
    <div className="App">
      <header className="App-header">
        <Input />
        <h1 className="name title">Names List</h1>
        {names.map((val, index) => {
          return (
            <NameTag
              key={`${index}${val.firstName}${val.lastName}`}
              firstName={val.firstName}
              lastName={val.lastName}
            ></NameTag>
          );
        })}
        {/* <NameTag
          firstName={names[0].firstName}
          lastName={names[0].lastName}
        ></NameTag>
        <NameTag
          firstName={names[1].firstName}
          lastName={names[1].lastName}
        ></NameTag>
        <NameTag
          firstName={names[2].firstName}
          lastName={names[2].lastName}
        ></NameTag> */}
      </header>
    </div>
  );
}

export default IntroApp;

// eslint-disable-next-line react/display-name
// const makeAzul = (BaseComponent) => (props) => {
//   const addBlue = {
//     style: {
//       color: "blue",
//     },
//   };
//   const newProps = {
//     ...props,
//     ...addBlue,
//   };
//   return <BaseComponent {...newProps} />;
// };

// eslint-disable-next-line react/display-name
// const removeInline = (BaseComponent) => (props) => {
//   const newProps = { ...props };
//   delete newProps.style;
//   return <BaseComponent {...newProps} />;
// };

// const BlueNameTag = makeAzul(NameTag);
// const CleanNameTag = removeInline(NameTag);

/* <h1 className="name title">Names List</h1>
        <BlueNameTag firstName="Ellie" lastName="Elefson"></BlueNameTag>
        <CleanNameTag
          style={{ color: "orange" }}
          firstName="Tom"
          lastName="Tomson"
        ></CleanNameTag>
        <NameTag
          style={{ color: "orange" }}
          firstName="Dweezil"
          lastName="Zappa"
        ></NameTag>
        <Input placeholder="Enter Here" type="text" /> */

// First example of a hook (useState())
//const [age, setAge] = useState(21);
//   const handleAgeUp = () => {
//     setAge(age + 1);
//   };
//   const handleAgeDown = () => {
//     setAge(age - 1);
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Use State Hook</h1>
//         <h2>Age:{age}</h2>
//         <button onClick={handleAgeUp}>Age Up</button>
//         <button onClick={handleAgeDown}>Age Down</button>
//       </header>
//     </div>

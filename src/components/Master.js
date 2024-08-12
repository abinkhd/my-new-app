import React, { useState } from "react";

const Master = (props) => {
  const [count, setCount] = useState(0);
  const buttonCSS = {
    backgroundColor: "#04AA6D" /* Green */,
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };
  return (
    <div>
      <button onClick={() => props.incrCount(props.jumpval)} style={buttonCSS}>
        jump {props.jumpval}
      </button>
    </div>
  );
};

export default Master;

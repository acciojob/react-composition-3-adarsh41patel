import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ display: "inline-block", position: "relative" }}
    >
      {children}

      {show && (
        <span className="tooltiptext" style={tooltipStyle}>
          {text}
        </span>
      )}
    </div>
  );
}

// inline fallback styling (optional, safe for testing)
const tooltipStyle = {
  position: "absolute",
  background: "black",
  color: "white",
  padding: "6px 10px",
  borderRadius: "4px",
  top: "120%",
  left: "50%",
  transform: "translateX(-50%)",
  whiteSpace: "nowrap",
  fontSize: "14px",
  zIndex: 10
};

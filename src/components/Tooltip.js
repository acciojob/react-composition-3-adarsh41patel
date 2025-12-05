import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  // Clone the child element and inject tooltip + className
  return React.cloneElement(children, {
    className: "tooltip",
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    children: (
      <>
        {children.props.children}
        {show && (
          <div className="tooltiptext">{text}</div>
        )}
      </>
    )
  });
}

import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  // ensure children are preserved
  const child = React.Children.only(children);

  const mergedClassName = child.props.className
    ? child.props.className + " tooltip"
    : "tooltip";

  return React.cloneElement(
    child,
    {
      className: mergedClassName,
      onMouseEnter: () => setShow(true),
      onMouseLeave: () => setShow(false),
    },
    <>
      {child.props.children}   {/* ORIGINAL text stays */}
      {show && <div className="tooltiptext">{text}</div>} 
    </>
  );
}

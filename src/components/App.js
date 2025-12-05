
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Tooltip text="This is a tooltip message">
        <h2>Hover over me</h2>
      </Tooltip>

      <hr style={{ margin: "30px 0" }} />

      <Tooltip text="Another tooltip example">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  )
}

export default App

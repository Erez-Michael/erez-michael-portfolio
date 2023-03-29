import React, { useState } from "react";
import "./Toggle.scss";

const Toggle=({handleClick})=> {
  const [checked, updateChecked] = useState();

  
  return (
    <label className={`Toggle ${checked ? "Toggle--checked" : ""}`}>
      <input
        type="checkbox"
        value={checked}
        onChange={() => updateChecked(!checked)}
        onClick={handleClick}
      />

      <div className="Toggle__slider">
     Ghost Icons</div>
      <small className="Toggle__text">Off</small>
      <small className="Toggle__text">On</small>
    </label>
  );
}

export default Toggle;

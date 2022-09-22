import React, {useState} from "react";

function Toggle() {
  const [isOn, setState] = useState(false)
  function handleClick() {
    setState((isOn) => !isOn)
  }

  const color = isOn? "red": "white";  
  

  return <button style = {{background: color}} onClick={handleClick}>{isOn? "ON": "OFF"}</button>
}

export default Toggle;

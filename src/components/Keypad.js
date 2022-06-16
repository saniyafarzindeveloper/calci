import React from "react";
import btnList from "./btnMapper";

export default function Keypad({ setter }) {
  

  return (
    <div className="keypad">
      {btnList.map((btnObj, index) => (
        <button
          className={btnObj.type} 
          onClick={() => {
            return setter(btnObj);
          }}
          key={index}>
          {btnObj.content}
          </button>
      ))}
    </div>
  );

  
}



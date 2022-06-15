import React, { useState , useEffect} from "react";
import "./App.css";
import Output from "./Output";
import Keypad from "./Keypad";

//useEffect will tell what should be done after the DOM is rendered. useEffect works only with FUNCTIONAL 
//components. It should be declared at the start of the component.


export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [btnClick, setbtnClick] = useState("");

  useEffect(() => {
    if ("0123456789".includes(btnClick))
      setInputValue((prev) => prev + btnClick);
  }, [btnClick]);

  return (
    <div className="calculator-main-app">
      <Output value={inputValue} />

      <div className="keypad">
        <Keypad setter={setbtnClick} />
      </div>
    </div>
  );
}

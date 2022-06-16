import React, { useState , useEffect} from "react";
import "./App.css";
import Output from "./Output";
import Keypad from "./Keypad";

//useEffect will tell what should be done after the DOM is rendered. useEffect works only with FUNCTIONAL 
//components. It should be declared at the start of the component.

//
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [btnClick, setbtnClick] = useState("");
  const ops = ['/' , '+' , '-' , '*'];


  //implementing the eval function
  const updateCalc = value => {
    //if the last value is an operator & the calculator is null
    if (ops.includes(value) && inputValue === '' ||
    //if the calculator has some values but the last value was also an operator
        ops.includes(value) && ops.includes(inputValue.slice(-1))) {
      //setting the above flag will limit the operators being used after an immediate operator
      return;
    }
    setInputValue(inputValue + value);

    //if the last value was not an operator
    if (!ops.includes(value)) {
      //implementing the eval function
      setResult (eval(inputValue + value).toString());
    }

    //equal to button functioning
    const equal = () =>{
      setbtnClick(eval(btnClick).toString());
    }
  }

  useEffect(() => {
    if ("0123456789.".includes(btnClick))
      setInputValue((prev) => prev + btnClick);
  }, [btnClick]);

  useEffect(() => {
    if ("+ - * /".includes(btnClick))
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

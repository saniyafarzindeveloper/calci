import React, { useState , useEffect} from "react";
import "./App.css";
import Output from "./Output";
import Keypad from "./Keypad";

//useEffect will tell what should be done after the DOM is rendered. useEffect works only with FUNCTIONAL 
//components. It should be declared at the start of the component.

//
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [btnClick, setbtnClick] = useState("");
  const [paran, setParan] = useState(false);

    //const [result, setResult] = useState("");
  // const ops = ['/' , '+' , '-' , '*'];


  // //implementing the eval function
  // const updateCalc = (value) => {
  //   //if the last value is an operator & the calculator is null
  //   if (ops.includes(value) && inputValue === '' ||
  //   //if the calculator has some values but the last value was also an operator
  //       ops.includes(value) && ops.includes(inputValue.slice(-1))) {
  //     //setting the above flag will limit the operators being used after an immediate operator
  //     return;
  //   }
  //   setInputValue(inputValue + value);

  //   //if the last value was not an operator
  //   if (!ops.includes(value)) {
  //     //implementing the eval function
  //     setResult (eval(inputValue + value).toString());
  //   }

  //   //equal to button functioning
  //   const equal = () =>{
  //     inputValue(eval(btnClick).toString());
  //   }
  // }

  //buttons working
  useEffect(() => {
    // if ("0 1 2 3 4 5 6 7 8 9 .".includes(btnClick))
    //   setInputValue((prev) => prev + btnClick);
    // console.log(inputValue);
    if(btnClick.type == "digit"){
      setInputValue((prev) => prev + btnClick.content );
    }
    else if(btnClick.type == "arithmetic"){
      setInputValue((prev) => prev + btnClick.content );
    }
    else if(btnClick.type == "trigo"){
      const math = `Math.${btnClick.content}(`
      setInputValue((prev) => prev + math);
      setParan(true);
    }
    else if(btnClick.type == "paran"){
      if(paran == true){
        setParan(false);
        setInputValue((prev) => prev + ')');
      }
      else{
        setParan(true);
        setInputValue((prev) => prev + '(');
      }
    }
    else if(btnClick.type == "allclear"){
      setInputValue("");
    }
    else if(btnClick.type == "backspace"){
      setInputValue(inputValue.slice(0, -1));
    }
    else {
      const result = eval(inputValue);
      // console.log(result);
      setInputValue(result || "" );
    }
  }, [btnClick]);

  // useEffect(() => {
  //   if ("+ - * /".includes(btnClick))
  //     setInputValue((prev) => prev + btnClick);
  // }, [btnClick]);

  // useEffect(() => {
  //   if ("sin cos tan".includes(btnClick))
  //     setInputValue((prev) => prev + btnClick);
  // }, [btnClick]);
  

  // useEffect(() => {
  //   if ("equal".includes(btnClick))
  //     setResult((result) => eval(inputValue));
  // }, [btnClick]);
  
  // useEffect(()=>{
  //   if("equal".includes(btnClick)){

  //   }
  // });

  return (
    <div className="calculator-main-app">
      <Output value={inputValue} />

      <div className="keypad">
        <Keypad setter={setbtnClick} />
      </div>
    </div>
  );
}

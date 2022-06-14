import React from 'react'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import {useState} from 'react';

export default function Keypad () {
    const [res, setRes] = useState("");

  //implementing button functioning
  const click = (c) =>{
    setRes(res.concat(c.target.name));
  }

  //implementing backspace
  const del = () =>{

  }

    //implementing all clear (AC)
  const ac = () => {
    setRes("")
  }

  return (
        <div className='keypad' >
        <button id='trigo' name='sin' onClick={click}>sin</button>
        <button id='trigo' name='cos' onClick={click}>cos</button>
        <button id='trigo' name='tan' onClick={click}>tan</button>
        <button id='trigo' name='()' onClick={click}>()</button>
        <button className='ac' onClick={ac}>AC</button>
        <button className='del' onClick={del} ><BackspaceOutlinedIcon /></button>
        <button id='ari' name='/' onClick={click}>/</button>
        <button id='ari' name='*' onClick={click}>*</button>
        <button name='7' onClick={click} className='dig'>7</button>
        <button name='8' onClick={click} className='dig'>8</button>
        <button name='9' onClick={click} className='dig'>9</button>
        <button id='ari' name='-' onClick={click}>-</button>
        <button name='4' onClick={click} className='dig'>4</button>
        <button name='5' onClick={click} className='dig'>5</button>
        <button name='6' onClick={click} className='dig'>6</button>
        <button id='ari' name='+' onClick={click}>+</button>
        <button name='1' onClick={click} className='dig'>1</button>
        <button name='2' onClick={click} className='dig'>2</button>
        <button name='3' onClick={click} className='dig'>3</button>
        <button className='equalto' onClick={click}>=</button>
        <button name='0' onClick={click} className='dig' id='zero'>0</button>
        <button name='.' onClick={click} className='dig'>.</button>
       
      </div>
  );
}



import React, {useState} from 'react'

export default function Output(props) {
  
  return (
          <form className='calci-input' >
          <input type='text' value={props.value} />
          </form>
  );
}



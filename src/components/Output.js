import React, {useState} from 'react'

export default function Output() {
  const [res] = useState("");
  return (
          <form className='calci-input' >
          <input type='text' value={res} ></input>
          </form>
  );
}



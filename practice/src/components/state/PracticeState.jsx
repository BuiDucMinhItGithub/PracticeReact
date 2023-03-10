import React from 'react'
import { useState } from 'react'

function PracticeState() {
    const [name, setName] = useState("");
    console.log(name);

    const handleClick = () => {
        console.log("oke")
    }
  return (
    <div>
        <button onClick={handleClick}>
            Click me
        </button>
        <input name='text' type="text" onKeyUp={e => setName(e.target.value)} />
    </div>
  )
}

export default PracticeState
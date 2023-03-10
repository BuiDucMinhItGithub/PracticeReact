import React, { useState } from 'react'
import { useEffect } from 'react'

function PracticeEffect() {
    const [listItem, setListItem] = useState("");
    const [list, setList] = useState([]);
    const handleClick = () => {
        
    }

    useEffect(() => {
        console.log("okeoekoekeo");
    }, [list])
    
  return (
    <div>
        <button onClick={handleClick}>
            Click me
        </button>
        <input name='text' type="text" onKeyUp={e => setList(e.target.value)} />
        <ul>
            {}
        </ul>
    </div>
  )
}

export default PracticeEffect
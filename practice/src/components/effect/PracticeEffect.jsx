import React, { useState } from 'react'
import { useEffect } from 'react'

function PracticeEffect() {
    const [listItem, setListItem] = useState("");
    const [list, setList] = useState([]);
    const [value, setValue] = useState(true);

    const handleClick = () => {
        setValue(true);
        setList(prev => {
            const newList = [...prev, listItem];
            setValue(false);
            return newList;
        })
        setValue(true);
    };

    useEffect(() => {
        setListItem("");
        setValue(true);
    }, [list])
    
  return (
    <div>
        <button onClick={handleClick}>
            Click me
        </button>
        <input name='text' type="text" value={value === true ? listItem : ""} onChange={e => setListItem(e.target.value)} />
        <ul>
            {list.map((key, index) => (
                <li key={index}>{key}</li>
            ))}
        </ul>
    </div>
  )
}

export default PracticeEffect
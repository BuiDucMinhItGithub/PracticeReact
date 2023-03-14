import React, { useCallback } from 'react'
import { useState } from 'react';
import Content from './Content';

function PracticeCallback() {

  // Neu su dung memo se han che re-render o component con thi nhung function phai su dung
  // useCallback moi co y nghia va nguoc lai
  const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

  return (
    <div>
        <Content onIncrease = {handleClick}/>
        <h1>{count}</h1>
    </div>
  )
}

export default PracticeCallback
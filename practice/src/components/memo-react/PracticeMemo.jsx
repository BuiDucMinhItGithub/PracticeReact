import React, { useState } from 'react'
import Content from './Content';
import { Button } from 'primereact/button';

function PracticeMemo() {
    // memo la HOC con useMemo la 1 hook (memo viet om lay component, useMemo viet trong function component)
    // memo tranh component bi re-render khi khong can thiet
    // useMemo tranh thuc hien lai 1 logic khong can thiet
    // dung memo khi 1 component su dung nhung nhieu props, dung nhieu UI 
    // Do phuc tap UI lon de tranh re-render khong can thiet
    // VD: co nhieu state nhung co state render lai nhung co nhung component khong can phai re-render lai state do
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClick =() => {
        setCount(count + 1);
    }

    const handleClick2 =() => {
      setCount2(count2 + 1);
  }
  return (
    <div>
        <Content count={count}/>
        <h1>{count}</h1>
        <h2>{count2}</h2>
        <Button onClick={handleClick} label="Count" style={{marginRight:'20px'}}/>
        <Button onClick={handleClick2} label="Count2" style={{marginRight:'20px'}}/>
    </div>
  )
}

export default PracticeMemo
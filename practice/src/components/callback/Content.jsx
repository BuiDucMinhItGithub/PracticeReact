import React from 'react'
import { memo } from 'react';
import { Button } from 'primereact/button';

function Content({onIncrease}) {
    console.log("re-render");
  return (
    <>
      <h3>Hello babe</h3>
      <Button onClick={onIncrease} label="Count" style={{marginRight:'20px'}}/>
    </>
  )
}

export default memo(Content)
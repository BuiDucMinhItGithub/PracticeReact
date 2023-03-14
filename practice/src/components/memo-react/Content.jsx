import React from 'react'
import { memo } from 'react';

function Content({count}) {
    console.log("re-render");
  return (
    <div>Hello {count}</div>
  )
}

export default memo(Content)
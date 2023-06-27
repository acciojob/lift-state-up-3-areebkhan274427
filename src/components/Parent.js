import React, { useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';
function Parent() {
    const [option,setOption] = useState('')
  return (
    <div className='parent'>
        <h1>Parent Component</h1>
        <Child1 optionChange={setOption}/>
        <Child2 optionChange={setOption}/>
        <p>Selected Option: {option}</p>
    </div>
  )
}

export default Parent
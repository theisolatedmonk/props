import React, { useState } from 'react'

 function index() {
  // let count = 0;
  const  [count, setCount] =useState(0)

  const incriment = ()=>{
    // count += 1; worng
    setCount(count + 1)
  }

  const decriment = ()=>{
    // count -= 1; worng
    setCount(count - 1)

  }
  return (
    <div>
      <h1>welcom to my counter</h1>
      <p>The count is {count}</p>
      <button className=' bg-black text-white text-center h-8 font-bold rounded-md w-10' onClick={decriment}>-</button>
      <button className='bg-green-300 text-center h-8 font-bold rounded-md w-10' onClick={incriment}>+</button>
    </div>
  )
}
export default index;
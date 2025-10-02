import React, { useState } from 'react'
import Button from './Button';

const MyUseState = () => {
    const [count, setCount] =useState<number>(0);
    const handleInc = ()=> {
        setCount(count + 1);
    }
  return (
    <div>
        Count: {count}
        <Button text='Tăng count' color='black' onClick={handleInc}></Button>
        <Button text='Tăng count cach 2' color='black' onClick={()=> setCount(count+1)}></Button>
    </div>
  )
}

export default MyUseState
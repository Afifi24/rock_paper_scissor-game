import React from 'react'
import { Link } from 'react-router-dom'
const LoseWin = () => {
  return (
    <div className='w-44 flex flex-col mt-10 items-center justify-center gap-4 mx-4'>
          <h2 className='uppercase tracking-[3px] text-white text-2xl text-center  font-bold'>you lose</h2>
           
           <button className='w-full  py-3 rounded-md uppercase text-[11px] text-red-500 bg-white font-semibold tracking-[2px]'><Link to={'/'}>play again </Link></button>
           
           
    </div>
  )
}

export default LoseWin
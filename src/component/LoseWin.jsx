import React from 'react'
import { Link } from 'react-router-dom'
const LoseWin = ({winlose}) => {
  return (
    <div>
      <div className='w-44  flex-col mt-10 items-center justify-center gap-4 mx-4 hidden sm:flex'>
          <h2 className='uppercase tracking-[3px] text-white text-2xl text-center  font-bold'>{winlose}</h2>
          <Link className='w-full' to={'/'}>
           <button className='w-full  py-3 rounded-md uppercase text-[11px] text-red-500 bg-white font-semibold tracking-[2px]'>play again </button>
           </Link>
           
           
    </div>
      <div className='w-44  flex-col mt-10 items-center justify-center gap-4 mx-4 flex sm:hidden absolute -bottom-52 -translate-x-20'>
          <h2 className='uppercase tracking-[3px] text-white text-2xl text-center  font-bold'>{winlose}</h2>
          <Link className='w-full' to={'/'}>
           <button className='w-full  py-3 rounded-md uppercase text-[11px] text-red-500 bg-white font-semibold tracking-[2px]'>play again </button>
           </Link>
           
           
    </div>
    </div>
  )
}

export default LoseWin
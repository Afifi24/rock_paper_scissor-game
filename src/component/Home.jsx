import React,{useState,useEffect} from 'react'
import img from '../images/bg-triangle.svg'
import rockimg from '../images/icon-rock.svg'
import paperimg from '../images/icon-paper.svg'
import scissorimg from '../images/icon-scissors.svg'
import Rules from './Rules'
import { Link } from 'react-router-dom'
const Home = ({ChoseGamescissor,ChoseGamepaper,ChoseGamerock}) => {
  const [isopen,setIsopen] = useState(false)
  return (
   
     
      <div>
      <div className='flex items-center justify-center'>
      <div className='relative mx-16  mt-16 justify-center flex flex-col items-center'>
        <img className='w-full' src={img} alt="" />

       <Link to={'/chose'}>
       <div onClick={ChoseGamepaper} className='bg-white cursor-pointer absolute flex items-center border-[15px] border-blue-500  justify-center -top-10  -left-6 w-32 h-32 rounded-full  '>
              <img  className='' src={paperimg} alt="" />
       </div>
       </Link>

        <Link to={'/chose'}>
        <div onClick={ChoseGamerock} className=' bottom-0 cursor-pointer -translate-x-16 bg-white absolute flex items-center border-[15px] border-red-500 justify-center  w-32 h-32 rounded-full'>
        <img  src={rockimg} alt="" />
        </div>
        </Link>

         <Link to={'/chose'}>
         <div onClick={ChoseGamescissor} className=' -top-10 cursor-pointer -right-6 bg-white absolute flex items-center border-[15px] border-yellow-500 justify-center  w-32 h-32 rounded-full'>
              <img  src={scissorimg} alt="" />
            </div>    
         </Link>    

      </div>
      </div>
        <div className='absolute md:z-20 left-1/2 -translate-x-1/2  bottom-10  md:left-[90%]'>
           <button onClick={()=>setIsopen(!isopen)} className='border uppercase text-sm rounded-md px-5  py-1 tracking-[3px] text-white'>Rules</button>
        </div>
        {
          isopen &&
          <Rules isopen={isopen} setIsopen={setIsopen}/>

        }
        
    </div>
   
  )
}

export default Home
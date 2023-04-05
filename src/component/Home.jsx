import React,{useState,useEffect} from 'react'
import img from '../images/bg-triangle.svg'
import rockimg from '../images/icon-rock.svg'
import paperimg from '../images/icon-paper.svg'
import scissorimg from '../images/icon-scissors.svg'
import Rules from './Rules'
const optionss= [
  {
    id:1,
    title:'rock',
    image:rockimg,
  },
  {
    id:2,
    title:'paper',
    image:paperimg,
  },
  {
    id:3,
    title:'scissor',
    image:scissorimg,
  },
]
import { Link } from 'react-router-dom'
const Home = ({handlegame}) => {
  const [isopen,setIsopen] = useState(false)
  return (
   
     
      <div>
      <div className='flex items-center justify-center'>
      <div className='relative mx-16  mt-16 justify-center flex flex-col items-center'>
        <div className='relative max-w-[400px] gap-10 grid place-items-center'>
           <img className=' relative top-0' src={img} alt="" />
            {optionss.map(item=>(
              <Link to={'/chose'}>
                 <div className={`bg-white cursor-pointer flex items-center border-[15px]   ${item.title ==='paper' ?  'border-blue-500 absolute left-0 -translate-x-10  ': item.title === 'rock'? 'border-red-500 absolute top-36 sm:top-44 translate-x-20 sm:translate-x-28':'border-yellow-500 absolute translate-x-44 sm:translate-x-60'}  justify-center -top-10  -left-6  w-24 h-24 sm:w-32 sm:h-32 rounded-full` } onClick={()=>handlegame(item)} >
                    <img src={item.image} alt="" />
                 </div>
              </Link>
            ))}
                 </div>

          
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
       {/* <Link to={'/chose'}>
       <div onClick={ChoseGamepaper} className='bg-white cursor-pointer absolute flex items-center border-[15px] border-blue-500  justify-center -top-10  -left-6 w-32 h-32 rounded-full  '>
              <img onClick={handlegame} value={'paper'}  className='' src={paperimg} alt="" />
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
         </Link>     */}
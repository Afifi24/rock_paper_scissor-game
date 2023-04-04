import React,{useState,useEffect,useRef} from 'react'
import Home from './component/Home'
import Score from './component/Score'
import Chosen from './component/Chosen'
import {Route,Routes} from 'react-router-dom'
const App = () => {
  const [rock,setRock] =useState(false)
  const [paper,setPaper] =useState(false)
  const [scissor,setScissor] =useState(false)
  const ChoseGamerock = ()=>{
           setRock(!rock)
           setPaper(false)
           setScissor(false)
           console.log('this is rock')
           console.log(rock)

      }
  const ChoseGamepaper = ()=>{
           setRock(false)
           setPaper(!paper)
           setScissor(false)
           console.log('this is paper')
           console.log(paper)
      }
  const ChoseGamescissor = ()=>{
           setRock(false)
           setPaper(false)
           setScissor(!scissor)
           console.log('this is scissor')

      }
     
  return (
    <div className='min-h-screen homebacground'>
      <Score/>
      <Routes>
      <Route path='/' element={<Home ChoseGamescissor={ChoseGamescissor} ChoseGamepaper={ChoseGamepaper} ChoseGamerock={ChoseGamerock}/>}/>
      <Route path='/chose' element={<Chosen rock={rock} scissor={scissor} paper={paper} />}/>
      </Routes>
      

    </div>
  )
}

export default App
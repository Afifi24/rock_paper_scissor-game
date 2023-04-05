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

      }
  const ChoseGamepaper = ()=>{
           setRock(false)
           setPaper(!paper)
           setScissor(false)
      }
  const ChoseGamescissor = ()=>{
           setRock(false)
           setPaper(false)
           setScissor(!scissor)

      }
      // ! Here is the logic 
      const options = ['rock','scissor','paper']
      const [player,setPlayer] = useState()
      const [Computer,setComputer] = useState()
      const [result,setResult] = useState()
      const [score,setScore] = useState(0)
      const [winlose,setWinelose] = useState()
    console.log(player)
      const handlegame = (item)=>{
        const randomIndex = Math.floor(Math.random()*options.length)
        const computerChoice = options[randomIndex]
        setPlayer(item)
        setComputer(computerChoice)
        setResult( getResult(item.title,computerChoice) )
        
      }
      console.log(Computer,result)
      const getResult =(player,Computer)=>{
       if(player === Computer){
        setWinelose('draw')
          
       }else if(
        (player ==='rock' && Computer=='scissor') ||
        (player === 'paper' && Computer === 'rock' ) ||
        (player === 'scissor' && Computer === 'paper' ) 
       ){
          setWinelose('you win')
          setScore(score + 1)
       } else {
          setScore(score - 1)
          setWinelose('you lose')
       }
      }
     
  return (
    <div className='min-h-screen homebacground'>
      <Score score={score}/>
      <Routes>
      <Route path='/' element={<Home handlegame={handlegame} ChoseGamescissor={ChoseGamescissor} ChoseGamepaper={ChoseGamepaper} ChoseGamerock={ChoseGamerock}/>}/>
      <Route path='/chose' element={<Chosen winlose={winlose}  Computer={Computer} player={player} />}/>
      </Routes>
      

    </div>
  )
}

export default App
import { useState , useRef } from 'react'

import Button from './components/Button'
import Panel from './components/Panel'
import './App.css'
var hour = 0 , minute =0, secound = 0
function App() {
  const [time, setTime] = useState({
    h: 0,
    m: 0,
    s: 0
  });

const isRunning = useRef(false);
const intervalId = useRef(null);  
  function start(){

  if (isRunning.current) return; 
    isRunning.current = true;


   intervalId.current = setInterval(function(){
    setTime(function(prev){
      let h = prev.h;
      let m = prev.m;
      let s = prev.s;

      s++;
      if(s === 60){
        s = 0;
        m += 1; 
      }
      if(m === 60){
        m = 0;
        h += 1;
      }

      return {h,m,s};
    })
    
  }
  ,1000)
  
  }


  function rest(){
    isRunning.current = false;
    clearInterval(intervalId.current);
    setTime({
    h: 0,
    m: 0,
    s: 0})
    
  }

  function stop(){
    isRunning.current = false;
    clearInterval(intervalId.current);

  }

  return(
  <>
  <Panel time = {time} />
  <div className='con'>

  <Button text = {"Start"} background = {"green"} color = {"white"} name = "start" click = {start}/>
  <Button text = {"Stop"} background = {"white"} color = {"#FBEF76"}name = "stop" click = {stop}/>
  <Button text = {"Rest"} background = {"red"} color = {"white"}name = "rest" click = {rest}/>
  </div>
  
  </>
  );
  
}

export default App

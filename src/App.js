import {useState} from "react"
// import {interval} from "rxjs"
// import {take, takeUntil} from "rxjs/operators"
import './index.css';
import DisplayComponent from "./components/DisplayComponent"
import BtnComponent from "./components/BtnComponent"

function App() {
  const [time, setTime] = useState({s:0, m:0, h:0})
  const [interv, setInterv] = useState()
  const [resInterv, setResInterv] = useState()

  const start = ()=>{
    run();
    setInterv(setInterval(run, 1000))
  }
//   const start = ()=>{
//   interval(1000).pipe(
//   takeUntil(!status)
//  ).subscribe(()=>{
//   run()
// })}

  const stop = ()=>{
    setTime({s:0, m:0, h:0})
  clearInterval(interv)
      }
 const wait = ()=>{
  clearInterval(interv)
 }
 const reset = ()=>{
  setTime({s:0, m:0, h:0})
  setResInterv(setInterval(run, 1000)) 
  // run();
  //  let res = (time.s === 0 & time.m === 0 & time.h ===0)
  //  {!res? st

   }
//   setTime({s:updateS, m:updateM, h:updateH})
// stop();
// setInterval(run(), 1000)}
  

let updateS = time.s, updateM=time.m, updateH=time.h;

let run = ()=>{
  if (updateM === 60){
    updateH++;
    updateM=0
  }
  if (updateS === 60){
    updateM++;
    updateS=0
  }
  updateS++;
  return setTime({s:updateS, m:updateM, h:updateH})
}



  return (<div className="main-section">
    <div className="clock-holder">
<div className="stopwatch">
  <DisplayComponent time={time}/>
  <BtnComponent start={start}
  stop={stop}
  wait={wait}
  reset={reset}
  />
</div>
    </div>
    </div>
  );
}

export default App;

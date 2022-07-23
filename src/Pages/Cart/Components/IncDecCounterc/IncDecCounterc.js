import {useState} from "react";
import "./IncDecCounterc.css";
function IncDecCounterc(){
  let [num, setNum]= useState(1);
  let incNum =()=>{
    if(num<50)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>1)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
   return(
    <>
    <div className="col-xl-1">
    <div class="quantity buttons_added">
    <button className="btnpm" >
  
    <p class="minus" type="button" onClick={decNum}>-</p>
 
  <input type="text" class="input-text qty text" value={num} onChange={handleChange}/>

    <p class="plus" type="button" onClick={incNum}>+</p></button>

</div>
</div>

   </>
  );
}
export default IncDecCounterc;
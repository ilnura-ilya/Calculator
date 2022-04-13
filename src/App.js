import { useState, useTransition } from 'react';
import './App.css';

function App() {

const [calc, setCalc] = useState(0);
const [firstNum, setFirstNum] = useState(0);
const [opr, setOpr] = useState('')

const [result, setResult] = useState('');

const operators = ['+', '-', '*', '/', '.'];

const toLocaleString = (calc) =>
  String(calc).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (calc) => calc.toString().replace(/\s/g, "");


const updateCalc =(e) => {
 let input = e.target.value;
 if (calc === 0) {
   setCalc(input);
  if (input[0] === '0'){
  setCalc(calc)
}} else if(operators.includes(input)){
  setCalc(calc + input);
  setOpr(input)
}
else {
  setCalc(calc + input);
}
}



const calculate = () => {
  setCalc(eval(calc));
    
  };


const deleteCalc = () => {
  if(calc === " "){
     return;
  } 
    
    const value = calc.slice(0, -1);
    setCalc(value);
    if (value.length < 1){
    setCalc(0)
  }
}

const deleteAll = () => {
  if(calc === ""){
    return;
 }
  setCalc(0);
  setResult(0);
}

 return (
    <div className="App">
      <div className='calculator'>
        <div className='rowOne'>
        <div id="display" value="0">
          {calc}</div>
        </div>

        
       <div className='buttons'>
        <button id="clear" onClick={deleteAll}>C</button>
        <button id="delete" onClick={deleteCalc} >Del</button>
        <button id="decimal" value="." onClick = {updateCalc}>.</button>
        <button id="add" value="+"  onClick = {updateCalc}>+</button>
        <button id="subtract" value="-"  onClick = {updateCalc}>-</button>
        <button id="multiply" value="*"  onClick = {updateCalc}>*</button>
        <button id="divide" value="/"  onClick = {updateCalc}>/</button>
        <button id="equals" value="="  onClick={calculate}>=</button>

          <button id="nine" value="9" onClick={updateCalc}>9</button>
          <button id="eight" value="8"onClick={updateCalc}>8</button>
          <button id="seven" value="7"onClick={updateCalc}>7</button>
          
        
          <button id="six" value="6"onClick={updateCalc}>6</button>
          <button id="five" value="5"onClick={updateCalc}>5</button>
          <button id="four" value="4"onClick={updateCalc}>4</button>
          
       
          <button id="three" value="3"onClick={updateCalc}>3</button>
          <button id="two" value="2"onClick={updateCalc}>2</button>
          <button id="one" value="1"onClick={updateCalc}>1</button>
           <button id="zero" value="0"onClick={updateCalc}>0</button>
           
           </div>
       
        </div>
    </div>
  );
}

export default App;

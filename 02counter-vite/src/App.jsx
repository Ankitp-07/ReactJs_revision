import { useState } from 'react'  //yahin se hooks aata hai  , isme useState ka hai 
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {

  let [counter , setCounter]=useState(15)  //use state changes ko UI me propagate karta hai 
//setcounter ek method hai jo control karega counter varibale ko
//"React, mujhe ek state do. Iski initial value 15 rakho. Current value counter me de do,
//  aur us value ko update karne ke liye setCounter naam ka function bhi de do."
 
/*
  React internally kuch aisa return karta hai:

[
  15,
  function setCounterFunction(newValue) {
    // React state update logic
  }
]

useState is a React Hook that allows a functional component
 to create and manage state (data that can change) and re-render the UI when that state changes.

*/
const addValue = ()=> {
  //counter=counter+1;

  

  //UI me change or update  react ke through hoga : method used to do this is called as react hook

  setCounter(counter+1)
  console.log("value added",counter);



}


const removeValue = ()=> {
  //counter=counter-1;
  
  setCounter(counter-1)
  console.log("value decreased",counter);
  
}


  return (
    <>
    <h1>welcome to the counter project , 2nd vite project </h1>
    <h2>Counter value : {counter}</h2>
    <button
    onClick={addValue}>add value {counter} </button>
    <br />
    <button onClick={removeValue}>decreases value : {counter}</button>
    </>
  )
}

export default App


//UI me data hooks ke through update hoga 

/* HOOKS

Kyuki React bolta hai

"Bhai mujhe kaise pata chale ki count badal gaya?"

React sirf variable change hone se dobara render nahi karta.

Usko kisi special mechanism ki zarurat hoti hai.

Aur wahi mechanism hai...

HOOKS


Hook ek special function hai jo React ko bolta hai

"Bhai is value ko yaad rakhna."

React:

"Achha, isko memory me store karta hoon."

Aur jab value badlegi...

React khud component ko dobara chalayega (re-render karega).

*/
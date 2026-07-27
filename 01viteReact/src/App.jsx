/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
*/






/*
//system se default produced wala function ye hai

function App() {
  

  return (
   <h1> react using Vite example for cleaning code </h1>
  )
}

export default App
*/


//rendering happends at main.jsx 

// now checking that can we do the rendering in this app.jsx , 
//isko ham samjhenge ek exampple se

/*
import Example from "./Example"

function App() {
  

  return (
   <Example />  //ek hi element return kar skte hainnn yaha pe 
  )
}

export default App

*/



//agar ek se jada element  return karna ho toh div me karke kar do saare 

import Example from "./Example"

function App() {
  const username = "ankit patel"   //variable introduced and injected in jsx
//username hamesh evaluated hi rhna chayiye , na ki if -else condition lag rha ho 
  return (
    

    //<div> 
    <> 
   
      <Example />
      <p>helloo this para for the check of multiple elements return throught the app.jsx</p>
      <h4>example samaptt!!! {username} </h4>    

      </>
    //</div>   //instead of div tag  , we can use  <> .... </>  it is called as fragment tag  
    
  )
}

export default App

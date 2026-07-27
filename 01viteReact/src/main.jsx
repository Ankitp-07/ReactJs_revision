import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import React from 'react'

/*

function MyApp(){     //App ek function hai jo return karta hai Html element ko 
  return (    //main me hi bana ke check karenge functionn ko 

    <div>
      <h1>
        Custom App !                  
      </h1>
    </div>
  )                                           //ye html part react me convert hoke tree banata hai , ekdam reactElement wala example in customReact 
}

createRoot(document.getElementById('root')).
render(
  //<>
    //<App />
   // <MyApp/>
    MyApp()  //yisa bhi likh skte hain 
     //</> 
)



//either use <strictMode> or not : na use karne se thoda light weight hojayega 

*/



//if we will to remove the conversion(parsing) of html into tree , we could able to save some time , so 

//instead of <App/> in render and App method  , we directly doing as : 


// const ReactElement =    //kisko render karna hai , like div , a , p etc 
// {
//     type : 'a',     //here a is taken , type means , elements kis type ka hai  
//     props : {        //propertiessss , objeect hota hai 
//         href :'https://google.com',
//         target:'_blank'

//     },
//     children : 'click me to visit google'
// }     iska kaam toh nahi ho paaya aab createlement se banate hai jo actal render ke liye acceptable ho 

//reactElement function thodi na , object hai 


/*
const dusraelement = (
    <a href="https://google.com">
        Click Me
    </a>
);




createRoot(document.getElementById('root')).
render(


  //<ReactElement/>   //yaha ek function expected hai , object ko alag tarah se treat karenge
 // ReactElement   chalega nahii kyuki render ke lie kch expectation function ki 

 //Ye React Element jaisa object hai, lekin React ka asli React Element nahi hai.
 //React sirf React.createElement() se bana hua object accept karta hai.
  //JSX component ke liye function/class expect karta hai.
 dusraelement    // ye isliye chal Kyuki JSX ne internally bana diya React.createElement(...) wala object.

)

*/



const reactElement=React.createElement(   //in proper element and attribute form
  'a',   //tag
  {
    href:'https://google.com',
    target:'_blank'
  }   ,   //object
  'click me visit google'   //text 

)
//Isme tum directly React object use kar rahe ho.
//Isliye pehle import karna padega:import React from 'react'

createRoot(document.getElementById('root')).render(
  reactElement
)
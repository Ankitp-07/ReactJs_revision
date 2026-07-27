import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){     //App ek function hai jo return karta hai Html element ko 
  return (    //main me hi bana ke check karenge functionn ko 

    <div>
      <h1>
        Custom App !
      </h1>
    </div>
  )
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
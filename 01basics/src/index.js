import React from 'react';
import ReactDOM from 'react-dom/client';

// yahi dono library kaam aati hai , d

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Dom ek tree structure hi toh hota hai naa
//react khud ka dom banata hai  , jiske andar ek method hai create root 

// root.render(       //root  ko render karo 
//   <React.StrictMode>
//     <App />            
//   </React.StrictMode>
// );
//react ke strictmode me APP ko render kar do , js se ham html ko render kae skte hain , cutomm tag bana pa rhe hain , 
//kyuki app nam ka koi tag nahi hota hai 



//strictMode ke bina bhi chal jayega
root.render(       //root  ko render karo 
  
    <App />            
  
);
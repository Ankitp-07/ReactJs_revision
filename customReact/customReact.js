/*

The above code aims to simulate how React renders elements to the DOM.
 Instead of using React's built-in rendering engine, it manually converts a JavaScript object (React Element) into a real HTML element and appends it to the webpage.

In simple words:

Aim: To understand the basic working of React's rendering process by creating 
a custom render function that converts a React-like object into an actual DOM element.

*/

const reactElement =    //kisko render karna hai , like div , a , p etc 
{
    type : 'a',     //here a is taken , type means , elements kis type ka hai  
    props : {        //propertiessss , objeect hota hai 
        href :'https://google.com',
        target:'_blank'

    },
    children : 'click me to visit google'
}        //react tree ki tarah bana ke dekhta hai isko 
const mainContainer=document.querySelector('#root')

//ek method jo element ko render kare or root me add kare isko



customRender(reactElement ,mainContainer)
//          <ky render karu>,<kaha render karu>  


function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)   //type will  be of reactELement

    domElement.innerHTML = reactElement.children


    /* manually adding prop of props suitable for one or two prop.
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */

    //if attributes are more in number , than we need to use loops for the props
//i.e
      for(const prop in reactElement.props){
    domElement.setAttribute(prop,reactElement.props[prop])}

    container.appendChild(domElement)
}
  






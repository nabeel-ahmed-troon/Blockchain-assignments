/*import React from 'react';

import ReactDom from 'react-dom';
// React Js code below
//here h1 is the jsx element not html
ReactDom.render(<h1 align='center'>!!Troon Technologies!!</h1>,
                document.getElementById("root"));


//if you want to add more elements in render you can use div or []

ReactDom.render(<div><h1 align='center'>!!Troon Technologies!!</h1>
                <h2>Blockchain</h2></div>,
                document.getElementById("root"));

ReactDom.render(
               [ <h1 align='center'>!!Troon Technologies!!</h1>,
                <h2>Blockchain</h2>,
                <h3>React Js</h3>
                ],
                document.getElementById("root"));


//normal javascript code below
/*var h1= document.createElement('h1');

h1.innerHTML="Good Morning";

document.getElementById("root").appendChild(h1);*/


// import React from 'react';
// import ReactDom from 'react-dom';
// import Vehicle from "./components";

/*const name="Raja Nabeel";
ReactDom.render(
  <>
  <h1>Troon Technologies{name}</h1>
  <p>List of Technologies we work on</p>
  <ol>
    <li>Web Development </li>
    <li>Blockchain Development</li>
  </ol>
  <Car color="red"/>
  </>,
  document.getElementById("root")
);*/

//ReactDom.render(<Vehicle />,document.getElementById("root"));
//=============================================
// import React from 'react';
// import ReactDOM from 'react-dom';

// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button onClick={shoot}>Take the shot!</button>
//   );
// }

// ReactDOM.render(<Football />, document.getElementById('root'));

// import React from 'react';
// import ReactDom from 'react-dom';

// const name="Raja Nabeel";
// const date= new Date().toLocaleDateString();
// const time= new Date().toLocaleTimeString();
// const day = new Date();


// ReactDom.render(
//   <>
// <h1>{`My name is ${name}`}</h1>
// <p>{`Date =${date}`}</p>
// <p>{`Time =${time}`}</p>
// <p>{`Time =${day.getDay()}`}</p>
//   </>,document.getElementById("root")
// );
//=======================================================

// import React from 'react';
// import ReactDom from 'react-dom';
// import "./index.css"


// let currentTime = new Date();
// currentTime=currentTime.getHours();

// let greetings='';

// //inline css below
// const cssStyle={};


// if(currentTime>=6 && currentTime<9)
// {
//     greetings='Good Morning';
//     cssStyle.color="green";
// }

// else if(currentTime>9)
//     {
//     greetings='Good Noon';
//     cssStyle.color="red";
//     }



// ReactDom.render(
//     <>
//     <div>
//       <h2>Hello Students,<span style={cssStyle}> {greetings}</span></h2>
//       <button input="submit"></button>
//       </div>
//     </>
    
//     ,
//     document.getElementById("root")

// );

// console.log(currentTime);

//=======================================================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from "./Components.js";
// import "./index.css";
// import "./DataArray.jsx";


// function ncards(val){

//   return(
//     <Card imageSrc={val.imageSrc}
//     title={val.title}
//     serialName={val.serialName}
//     link={val.link}
//     />
//   );
// }

// ReactDOM.render(
//   <>
//   <h1 className="mainHeading">Netflix Serials</h1>
//   {DataArray.map(ncards)}
// </>,
//   document.getElementById("root")
  
// );

import React from "react";
import ReactDOM  from "react-dom";
import App from "./App.js";
import "./index.css"

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);

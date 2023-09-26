// import './index.css';

// import App from './App';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//=========The way to create element and render element or function
// import React from "react";
// import ReactDOM from "react-dom/client";

// const element = <h1>Greeting, Dang Hoang Thu</h1>
// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


//========= [Reading] Jsx syntax in React:
// Example 1: Jsx is also an expression:

// import React from "react";
// import ReactDOM from "react-dom/client";

// const user = {
//     firstName: "Dang",
//     midleName: "Hoang",
//     lastName: "Thu"
// }

// function checkInformation(user){
//     if (user) {
//         return <h1>Hello, {formatName(user)} My Lover</h1>
//     }
//     else {
//         return <h1>This is a stranger person</h1>
//     }
// }    

// function formatName(user) {
//     return user.lastName;
// }
// const information = (
//     <h1>Hello, {formatName(user)} Mylover</h1>
// )

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(information);

// Example 2: to create an element by React.createElement:
// The way 1:
// import React from "react"
// import ReactDOM from "react-dom/client";

// const element = React.createElement (
//     'h1',
//     {id: "name", className: "greeting"},
//     "Dang Hoang Thu Yeu Yeu"
// );
// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// The way 2:
//.....create child elements nest into parent element:

// import React from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//     return (
//         React.createElement(
//             'div',
//             {className: "container"},
//                 React.createElement('h1', {ClassName: "Container_header"}, 'TT'),
//                 React.createElement('ul', {ClassName: "Container_content"}, 
//                         React.createElement("li", {className: "content_item1"}, 'Đoàn Hạ Băng'),
//                         React.createElement("li", {className: "content_item2"}, 'Đoàn Hoàng Thư')
//                 )
                
//         )
//     )
// }

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)

//========create element according Jsx:
// import React from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//     return (
//         <div>
//             <h1>Thu - Tung</h1>
//             <h4>Doan Ha Bang</h4>
//             <h4>Doan Hoang Thu</h4>
//         </div>
//     )
// }

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)

// [practice] Embed your name in the react Element created by React.createElement.

import React from "react";
import ReactDOM from "react-dom/client";

let yourName = "Ha Bang";
const RenderName = () => {

    return (
        React.createElement(
            'h1',
            {style: {textAlign: "center", color: "red", fontFamily: "cursive"}},
            yourName
        )
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RenderName/>);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from './redux/store';
import { Provider } from 'react-redux';



ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>, 
  document.getElementById("root")
)


// const pizzas = [
//   {id: 3, name: "Sultan", price: 1000},
//   {id: 6, name: "Nuriya", price: 5000}, 
//   {id: 3, name: "Sultan", price: 2000},
//   {id: 3, name: "Sultan", price: 1000},
//   {id: 6, name: "Nuriya", price: 5000},
// ];

// const obj = {};

// // pizzas.forEach( (item) => {
// //   obj[item.id] = (obj[item.id] || 0) + 1;
// // } )

// const test = pizzas.reduce( (prev, item) => {
//   prev[item.id] = {
//     name: item.name,
//     sum: (prev[item.id] === undefined ? 0 : prev[item.id].sum) + item.price,
//     count: (prev[item.id] === undefined ? 0 : prev[item.id].count) + 1,
//     items: 
//   }
//   return prev;
// }, {} ) 

// console.log(test);








































import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import items from './data.json';

// const element = React.createElement(
//   'div',
//   { a: 5, b: 10 },
//   'Hello',
//   ' ',
//   'world',
// );

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: ['Hello', ' ', 'world'],
// });

const root = ReactDOM.createRoot(document.getElementById('root'));

const helloSpanElement = React.createElement('span', { children: 'Hello' });
const worldSpanElement = React.createElement('span', { children: ' world' });

const element = React.createElement('div', {
  children: [helloSpanElement, worldSpanElement],
});

// root.render(element);

const helloSpanJsxElement = <span>Hello</span>;
const worldSpanJsxElement = <span> worlds</span>;

const jsxElement = (
  <div>
    {helloSpanJsxElement}
    {worldSpanJsxElement}
  </div>
);

console.log(jsxElement);

// root.render(jsxElement);

// const data = {
//   id: 'id-1',
//   url: 'https:cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers. Art abstract',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/reactapolous-24766/',
//   },
//   quantity: 10,
// };

const data = items[0];

// const card = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Author: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Price: {data.price}</p>
//     <p>Ability: {data.quantity > 0 ? 'yes' : 'no'}</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// function Card({ url, title, authorUrl, authorTag, price, quantity }) {
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Author: <a href={authorUrl}>{authorTag}</a>
//       </p>
//       <p>Price: {price}</p>
//       <p>Ability: {quantity > 0 ? 'yes' : 'no'}</p>
//       <button type="button">Add to cart</button>
//     </div>
//   );
// }

// root.render(
//   <Card
//     url={data.url}
//     title={data.title}
//     authorUrl={data.author.url}
//     authorTag={data.author.tag}
//     price={data.price}
//     quantity={data.quantity}
//   />,
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

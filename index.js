// import React from 'react';
// import ReactDOM  from 'react-dom';
// import App from './App';

// ReactDOM.render(<App></App>,document.getElementById('root'));

// class Animal {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     speak()
//     {
//         console.log('I am', this.name, 'and I am', this.age, 'years old');
//     }
// }

// const animal1 = new Animal('SIMBA', 7);
// animal1.speak();

// class lion extends Animal{
//     constructor (name,age,color,speed){
//         super(name, age);
//         this.color= color;
//         this.speed=speed;

// }
// roar()
// {
//     console.log('I have', this.color, 'and i run in', this.speed);
// }
// }

// const lion1 = new lion('pk', 20, 'white', '10km/hr');
// lion1.speak();
// lion1.roar();
// console.log(lion1);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
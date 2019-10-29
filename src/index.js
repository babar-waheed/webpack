//each file has its own scope

//CommonJS = implementation by Node.js
    //require / module.exports
//AMD asynchronous module definition
    //require, define
//ES2015
    // import, export
//CommonJS
//const sum = require("./sum");

//ES2015 / ES6
// import sum from './sum';
// import './image_viewer';
//
// console.log(sum(1, 2));

const button = document.createElement('button');
button.innerText = 'click';
button.onclick = () => {
    System.import('./image_viewer')
        .then(module => {
           module.default();
    })

};

document.body.appendChild(button);

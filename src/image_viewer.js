import './image_viewer.css';
import big from '../assets/big.jpg';
import small from '../assets/small.jpg'
//css-loader - knows how to deal with CSS imports
//style-loader - takes CSS and adds them to HTML document

let _image = document.createElement('img');
_image.src = small;
document.body.appendChild(_image);

let _image1 = document.createElement('img');
_image1.src = big;
document.body.appendChild(_image1);

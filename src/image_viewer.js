import './image_viewer.css';

//css-loader - knows how to deal with CSS imports
//style-loader - takes CSS and adds them to HTML document

let _image = document.createElement('img');
_image.src = 'http://lorempixel.com/400/400';


document.body.appendChild(_image);

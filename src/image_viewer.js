import './image_viewer.css';
import small from '../assets/small.jpg'
//css-loader - knows how to deal with CSS imports
//style-loader - takes CSS and adds them to HTML document

export default () => {
    let _image = document.createElement('img');
    _image.src = small;
    document.body.appendChild(_image);
}


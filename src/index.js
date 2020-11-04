import './style.css';
import navBar from './navbar';
import imageView from './imageview';
import imgNav from './imagenav';
let temp = [...Array(10).keys()];
navBar.addHead();
imageView.addImg();
imgNav.addNav(temp);
console.log('Success!');

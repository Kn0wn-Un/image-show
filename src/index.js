import './style.css';
import navBar from './navbar';
import imageView from './imageview';
import imgNav from './imagenav';
import i1 from './1.jpg';
import i2 from './2.jpg';
import i3 from './3.jpg';
import i4 from './4.jpg';
import i5 from './5.jpg';

let imgarr = [];
const makeArr = () => {
    imgarr.push(i1);
    imgarr.push(i2);
    imgarr.push(i3);
    imgarr.push(i4);
    imgarr.push(i5);
};
makeArr();
navBar.addHead();
imageView.addImg();
imgNav.addNav(imgarr);

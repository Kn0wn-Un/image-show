import './style.css';
import left from './chevron-left.svg';
import right from './chevron-right.svg';
import play from './play.svg';
let temp = [...Array(10).keys()];
const imgNav = (() => {
    const addNav = () => {
        const imgNav = document.createElement('div');
        imgNav.classList.add('image-nav');
        let controls = addControls();
        let preview = addPre(temp);
        imgNav.appendChild(controls);
        imgNav.appendChild(preview);
        document.body.appendChild(imgNav);
    };
    const addControls = () => {
        let controls = document.createElement('div');
        controls.classList.add('controls');
        let prev = document.createElement('img');
        prev.classList.add('previous');
        prev.src = left;
        prev.alt = 'Previous';
        let next = document.createElement('img');
        next.classList.add('next');
        next.src = right;
        next.alt = 'Next';
        let show = document.createElement('img');
        show.classList.add('play');
        show.src = play;
        show.alt = 'Play';
        controls.appendChild(prev);
        controls.appendChild(show);
        controls.appendChild(next);
        return controls;
    };
    const addPre = (arr) => {
        let preview = document.createElement('div');
        preview.classList.add('image-pre');
        for (let i = 0; i < arr.length; i++) {
            let imgS = document.createElement('div');
            imgS.classList.add('image-sm');
            imgS.innerHTML = arr[i];
            preview.appendChild(imgS);
        }
        return preview;
    };
    return { addNav };
})();
export default imgNav;

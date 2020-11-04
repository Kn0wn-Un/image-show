import './style.css';
import left from './chevron-left.svg';
import right from './chevron-right.svg';
import play from './play.svg';
import pause from './pause.svg';
import navHand from './navhandler';
const imgNav = (() => {
    const addNav = (temp) => {
        const imgNav = document.createElement('div');
        imgNav.classList.add('image-nav');
        let controls = addControls(temp);
        let preview = addPre(temp);
        imgNav.appendChild(controls);
        imgNav.appendChild(preview);
        document.body.appendChild(imgNav);
    };
    const addControls = (temp) => {
        let controls = document.createElement('div');
        controls.classList.add('controls');
        let prev = document.createElement('img');
        prev.classList.add('previous');
        prev.src = left;
        prev.alt = 'Previous';
        prev.addEventListener('click', () => {
            navHand.ctrClick(prev, temp);
        });
        let next = document.createElement('img');
        next.classList.add('next');
        next.src = right;
        next.alt = 'Next';
        next.addEventListener('click', () => {
            navHand.ctrClick(next, temp);
        });
        let show = document.createElement('img');
        show.classList.add('play');
        show.src = play;
        show.alt = 'Play';
        show.addEventListener('click', () => {
            navHand.imageShow(show);
        });
        controls.appendChild(prev);
        controls.appendChild(next);
        controls.appendChild(show);
        return controls;
    };
    const addPre = (arr) => {
        let preview = document.createElement('div');
        preview.classList.add('image-pre');
        for (let i = 0; i < arr.length; i++) {
            let imgS = document.createElement('div');
            imgS.classList.add('image-sm');
            imgS.innerHTML = arr[i];
            navHand.imageClick(imgS);
            preview.appendChild(imgS);
        }
        return preview;
    };
    const addPause = (btn, isPlay) => {
        btn.classList.remove(isPlay ? 'play' : 'pause');
        btn.src = isPlay ? pause : play;
        btn.alt = isPlay ? 'pause' : 'play';
        btn.classList.add(isPlay ? 'pause' : 'play');
    };
    return { addNav, addPause };
})();
export default imgNav;

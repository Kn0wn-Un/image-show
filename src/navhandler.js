import imgNav from './imagenav';
const navHand = (() => {
    const imageClick = (img, arr) => {
        img.addEventListener('click', () => {
            imageDisp(img.src);
            let isPause = document.querySelector('.pause');
            if (isPause) imageShow(isPause, arr);
        });
    };
    const imageDisp = (img) => {
        let imageShow = document.querySelector('.image');
        imageShow.src = img;
    };
    const nextImg = (arr) => {
        let temp = document.querySelector('.image').src;
        console.log(temp);
        let pos = arr.indexOf(temp);
        imageDisp(arr[(pos + 1) % arr.length]);
    };
    const imageShow = (btn, arr) => {
        if (btn.classList[0] !== 'play') clearInterval(btn.id);
        else {
            let x = setInterval(() => {
                navHand.nextImg(arr);
            }, 3000);
            btn.id = x;
        }
        imgNav.addPause(btn, btn.classList[0] === 'play' ? true : false);
    };
    const ctrClick = (btn, arr) => {
        let temp = document.querySelector('.image').src;
        let pos = arr.indexOf(temp);
        console.log(pos);
        if (btn.classList[0] === 'previous') {
            imageDisp(arr[pos === 0 ? arr.length - 1 : (pos - 1) % arr.length]);
            if (btn.nextSibling.classList[0] === 'pause')
                imageShow(btn.nextSibling, arr);
        }
        if (btn.classList[0] === 'next') {
            imageDisp(arr[(pos + 1) % arr.length]);
            if (btn.previousSibling.classList[0] === 'pause')
                imageShow(btn.previousSibling, arr);
        }
    };
    return { imageClick, imageShow, ctrClick, imageDisp, nextImg };
})();
export default navHand;

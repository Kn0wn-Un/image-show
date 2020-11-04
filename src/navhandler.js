import imgNav from './imagenav';
const navHand = (() => {
    const imageClick = (img) => {
        img.addEventListener('click', () => {
            imageDisp(img.innerHTML);
        });
    };
    const imageDisp = (img) => {
        let imageShow = document.querySelector('.image');
        imageShow.innerHTML = img;
    };
    const imageShow = (btn) => {
        console.log(btn.classList[0]);
        imgNav.addPause(btn, btn.classList[0] === 'play' ? true : false);
    };
    const ctrClick = (btn, arr) => {
        console.log(btn.classList[0]);
        let temp = document.querySelector('.image').innerHTML;
        let pos = arr.find((img) => img === parseInt(temp, 10));
        if (btn.classList[0] === 'previous')
            imageDisp(pos === 0 ? arr.length - 1 : (pos - 1) % arr.length);
        if (btn.classList[0] === 'next') imageDisp((pos + 1) % arr.length);
    };
    return { imageClick, imageShow, ctrClick };
})();
export default navHand;

import './style.css';
const imageView = (() => {
    const addImg = () => {
        const imgV = document.createElement('div');
        imgV.classList.add('image-view');
        const imgS = document.createElement('div');
        imgS.classList.add('image');
        imgV.appendChild(imgS);
        document.body.appendChild(imgV);
    };
    return { addImg };
})();
export default imageView;
